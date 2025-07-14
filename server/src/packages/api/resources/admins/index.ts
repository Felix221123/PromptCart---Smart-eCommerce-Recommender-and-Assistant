import Router from 'express-promise-router'
import { productHello } from './productController'
import { userHello, allUsers } from './userController'
import { authenticate } from '../../middlewares/authenticateToken'


const router = Router()

// api starting point
router.route('/users').get(userHello)

// api starting point for products
router.route('/products').get(productHello)

// get all users endpoint
router.get('/allUsers', authenticate, allUsers)


export default router
