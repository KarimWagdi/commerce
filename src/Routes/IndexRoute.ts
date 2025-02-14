import { Router } from 'express'
import UserRoute from './UserRoute'
import WalletRoute from './WalletRoutes'

const router = Router()

// routes

router.use('/users', UserRoute)

router.use('/wallets', WalletRoute)

export default router