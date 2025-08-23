import Router from 'express-promise-router'
import { productHello,
    allProductCategories,
    allProducts,
    getFilteredProducts,
} from './controller'




const router = Router()

// api starting point for products
router.route('/hello').get(productHello)

// api to get all categories
router.route('/categories').get(allProductCategories)

// api to get all products
router.route('/all-products').get(allProducts)

// api to get products by category egRoute: GET /products?category=XYZ
// /products/filter?category=beauty,furniture&minPrice=0&maxPrice=50
router.route('/filter').get(getFilteredProducts)

export default router