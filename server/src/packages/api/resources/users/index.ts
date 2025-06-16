import Router from 'express-promise-router'
import { hello, register } from './controller'

const router = Router()


router.route('/').get(hello)
router.route('/signup').post(register)

export default router
