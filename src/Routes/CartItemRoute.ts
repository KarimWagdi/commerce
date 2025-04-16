import { Router } from "express";
import CartItemController from "../Controller/CartItemController";
import verifyToken from "../MiddelWares/Auth";
const router = Router();

router.get("/", CartItemController.getCartItem);
router.post("/", CartItemController.addCartItem);
router.post("/decrease", CartItemController.decrease);
router.delete("/:id", CartItemController.deleteCartItem);

export default router;
