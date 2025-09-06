import * as express from 'express'
import userRouter from '../api/resources/users/index'
import adminRouter from '../api/resources/admins/index'
import productRouter from '../api/resources/products/index'


const router = express.Router()

router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/products', productRouter)








export default router
