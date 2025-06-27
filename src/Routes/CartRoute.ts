import { Router } from 'express'
import CartController from '../Controller/CartController'
import verifyToken from '../MiddelWares/Auth';
const router = Router()

router.get('/',verifyToken, CartController.getCart);
router.post('/',verifyToken, CartController.addCart);
router.put('/:id',verifyToken, CartController.updateCart);
router.delete('/:id',verifyToken,CartController.deleteUser);

export default router