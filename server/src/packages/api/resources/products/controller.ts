import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../../../../data-source'
import { Product } from '../../../database/models/product'
import * as httpStatus from 'http-status'
import { filterSchema } from '../../middlewares/validation'

// api starting point
export const productHello = async (_req: Request, res: Response, _next: NextFunction) => {
    res.status(httpStatus.OK).json({ hello: 'product controller here' })
}


// get all categories available in the database
export const allProductCategories = async (_req: Request, res: Response, _next: NextFunction) => {
    try {
        const productRepo = AppDataSource.getRepository(Product)

        const products = await productRepo.find({
            select: ['category'], // Only fetch the category field
        })

        // Extract and deduplicate categories
        const categoriesSet = new Set(products.map(p => p.category))
        const categories = Array.from(categoriesSet)

        res.status(httpStatus.OK).json({ categories })
    } catch (error) {
        console.error('Error fetching categories:', error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch categories' })
    }
}

// get all products available in the database
export const allProducts = async (_req: Request, res: Response, _next: NextFunction) => {
    try {
        const productRepo = AppDataSource.getRepository(Product)

        const products = await productRepo.find()
        res.status(httpStatus.OK).json({ products })
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch products' })
    }
}



// get products by category, minimum and maximum price
export const getFilteredProducts = async (req: Request, res: Response) => {
    try {
        const { error, value } = filterSchema.validate(req.query);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { category, minPrice, maxPrice } = value;

        const productRepo = AppDataSource.getRepository(Product);
        const query = productRepo.createQueryBuilder('product');

        // Category filter
        if (category) {
            const categories = category.split(',');
            query.andWhere('product.category IN (:...categories)', { categories });
        }

        // Price filter
        if (minPrice !== undefined) {
            query.andWhere('product.price >= :minPrice', { minPrice });
        }

        if (maxPrice !== undefined) {
            if (maxPrice >= 1000) {
                // If maxPrice is 1000 or more, do not apply an upper limit
                // Effectively, this includes all products above 1000 as well
            } else {
                query.andWhere('product.price <= :maxPrice', { maxPrice });
            }
        }

        const products = await query.getMany();
        res.status(200).json({ products });

    } catch (error) {
        console.error('Error filtering products:', error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch filtered products' })
    }
}
