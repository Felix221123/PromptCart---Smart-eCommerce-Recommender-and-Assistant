import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../../../../data-source'
import { Product } from '~/packages/database/models/product'
import * as httpStatus from 'http-status'


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

// get products by category
export const getProductsByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.query

        if (!category || typeof category !== 'string') {
            return res.status(httpStatus.BAD_REQUEST).json({ error: 'Category is required and must be a string' })
        }

        const productRepo = AppDataSource.getRepository(Product)

        const query = productRepo.createQueryBuilder('product')

        // Category filter: multiple allowed
        if (category) {
            const categories = (category as string).split(',')
            query.andWhere('product.category IN (:...categories)', { categories })
        }

        const products = await query.getMany()

        res.status(httpStatus.OK).json({ products })

    } catch (error) {
        console.error('Error fetching products by category:', error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch products by category' })
    }
}






// get products by category
export const getFilteredProducts = async (req: Request, res: Response) => {
    try {
        const { category, minPrice, maxPrice } = req.query

        const productRepo = AppDataSource.getRepository(Product)

        const query = productRepo.createQueryBuilder('product')

        // Category filter: multiple allowed
        if (category) {
            const categories = (category as string).split(',')
            query.andWhere('product.category IN (:...categories)', { categories })
        }

        // Price range filter
        if (minPrice) {
            query.andWhere('product.price >= :minPrice', { minPrice: parseFloat(minPrice as string) })
        }
        if (maxPrice) {
            query.andWhere('product.price <= :maxPrice', { maxPrice: parseFloat(maxPrice as string) })
        }

        const products = await query.getMany()

        res.status(httpStatus.OK).json({ products })
    } catch (error) {
        console.error('Error filtering products:', error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch filtered products' })
    }
}
