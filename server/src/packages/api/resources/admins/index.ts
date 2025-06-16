import Router from 'express-promise-router'
import { productHello } from './productController'
import { userHello } from './userController'

const router = Router()

router.route('/users').get(userHello)
router.route('/products').get(productHello)


export default router
