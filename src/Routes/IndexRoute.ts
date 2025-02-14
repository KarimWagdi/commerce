import { Router } from 'express';
import UserRoute from './UserRoute';
import CartRoute from './CartRoute';
import ProductRoute from './ProductRoute';
import WalletRoute from './WalletRoute';
import RateRoute from './RateRoute';
import OrderRoute from './OrderRoute';

const router = Router();

<<<<<<< HEAD
router.use('/users', UserRoute);
router.use('/cart', CartRoute);
router.use('/products', ProductRoute);
router.use('/wallets', WalletRoute);
router.use('/rates', RateRoute);
router.use('/orders', OrderRoute);
=======
import ProductRoute from './ProductRoute'


import CartRoute from './CartRoute'

import WalletRoute from './WalletRoutes'
import RateRoute from "./RateRoute";

const router = Router()

// routes

router.use('/users', UserRoute)

router.use('/products', ProductRoute)


router.use('/cart',CartRoute)


router.use("/rates", RateRoute);
router.use('/wallets', WalletRoute)

export default router
>>>>>>> 3f4a0efb281da9f980405ce639efc59e3c54f82d

export default router;