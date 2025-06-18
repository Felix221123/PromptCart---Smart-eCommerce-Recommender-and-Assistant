import Router from 'express-promise-router'
import { register , login } from './controller'
import { authenticateToken } from '../../middlewares/authenticateToken'

const router = Router()

// user registration endpoint
router.route('/register').post(register)

// user login endpoint
router.route('/login').post(login)



export default router
