import { Router } from 'express';
import UserRoute from './UserRoute';
import CartRoute from './CartRoute';
import ProductRoute from './ProductRoute';
import WalletRoute from './WalletRoute';
import RateRoute from './RateRoute';
import OrderRoute from './OrderRoute';

const router = Router();

router.use('/users', UserRoute);
router.use('/cart', CartRoute);
router.use('/products', ProductRoute);
router.use('/wallets', WalletRoute);
router.use('/rates', RateRoute);
router.use('/orders', OrderRoute);




export default router


