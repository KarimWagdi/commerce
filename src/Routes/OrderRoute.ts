import { Router } from "express";
import OrderController from "../Controller/OrderController";

const router = Router();

router.get("/", OrderController.getOrders);

// router.get('/:id', OrderController.getOrderById);

router.post("/:id", OrderController.createOrder);

// router.patch('/:id/status', OrderController.updateOrderStatus);

// router.delete('/:id', OrderController.deleteOrder);

export default router;
