import { Router } from 'express'
import CartItemController from '../Controller/CartItemController'
import verifyToken from '../MiddelWares/Auth';
const router = Router()

router.get('/', verifyToken, CartItemController.getCartItem);
router.post('/', verifyToken, CartItemController.addCartItem);
// router.put('/:id', CartItemController.updateCart);
router.delete('/:id', verifyToken, CartItemController.deleteUser);

export default router