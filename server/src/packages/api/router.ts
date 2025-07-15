import * as express from 'express'
import userRouter from '~/packages/api/resources/users/index'
import adminRouter from '~/packages/api/resources/admins/index'
import productRouter from '~/packages/api/resources/products/index'


const router = express.Router()

router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/products', productRouter)








export default router
