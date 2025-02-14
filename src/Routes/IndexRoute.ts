
import { Router } from 'express'
import UserRoute from './UserRoute'
import WalletRoute from './WalletRoutes'
import RateRoute from "./RateRoute";
const router = Router()

// routes

router.use('/users', UserRoute)
router.use("/rates", RateRoute);
router.use('/wallets', WalletRoute)

export default router

