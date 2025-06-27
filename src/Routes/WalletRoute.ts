import { Router } from 'express'
import WalletController from '../Controller/WalletController'
import verifyToken from '../MiddelWares/Auth';
const router = Router()

router.get('/',verifyToken, WalletController.getWallet);

router.post('/',verifyToken, WalletController.addWallet);

router.put('/:id',verifyToken, WalletController.updateWallet);

router.delete('/:id',verifyToken, WalletController.deleteWallet);

export default router