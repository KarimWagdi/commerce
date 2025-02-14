import { Router } from 'express'
import UserRoute from './UserRoute'
import CartRoute from './CartRoute'
const router = Router()

// routes

router.use('/users', UserRoute)
router.use('/cart',CartRoute)
export default router