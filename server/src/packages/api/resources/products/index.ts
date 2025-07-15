import Router from 'express-promise-router'
import { productHello, 
    allProductCategories, 
    allProducts, 
    getFilteredProducts,
    getProductsByCategory
} from './controller'




const router = Router()

// api starting point for products
router.route('/hello').get(productHello)

// api to get all categories
router.route('/categories').get(allProductCategories)

// api to get all products
router.route('/all-products').get(allProducts)

// api to get products by category egRoute: GET /products?category=XYZ,XYZ,XYZ
router.route('/').get(getProductsByCategory)


// api to get products by category egRoute: GET /products?category=XYZ
// /products?category=beauty,furniture&minPrice=0&maxPrice=50
router.route('/').get(getFilteredProducts)

export default router