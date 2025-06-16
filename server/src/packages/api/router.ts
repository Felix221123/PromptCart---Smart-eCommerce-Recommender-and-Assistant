import * as express from 'express'
import userRouter from '~/packages/api/resources/users/index'
import adminRouter from '~/packages/api/resources/admins/index'

const router = express.Router()

router.use('/user', userRouter)
router.use('/admin', adminRouter)








export default router
