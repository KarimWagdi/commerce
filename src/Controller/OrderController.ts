import { Request, Response } from 'express';
import { AppDataSource } from "../dbConfig/data-source";

class OrderController {
    static async getOrders(req: Request, res: Response) {
        try {
            const orderRepository = AppDataSource.getRepository("Order");
            const orders = await orderRepository.find({
                relations: ['orderProducts', 'orderProducts.product']
            });
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async getOrderById(req: Request, res: Response) {
        try {
            const orderRepository = AppDataSource.getRepository("Order");
            const order = await orderRepository.findOne({
                where: { id: parseInt(req.params.id) },
                relations: ['orderProducts', 'orderProducts.product']
            });

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            res.json(order);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async createOrder(req: Request, res: Response) {
        try {
            const orderRepository = AppDataSource.getRepository("Order");
            const orderProductRepository = AppDataSource.getRepository("OrderProduct");

            // Start transaction
            await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
                // Create order
                const newOrder = orderRepository.create({
                    user_id: req.body.user_id,
                    total_price: req.body.total_price,
                });

                const savedOrder = await transactionalEntityManager.save(newOrder);

                // Create order products
                const orderProducts = req.body.products.map((product: any) => {
                    return orderProductRepository.create({
                        order_id: savedOrder.id,
                        product_id: product.product_id,
                        quantity: product.quantity,
                        unit_price: product.unit_price
                    });
                });

                await transactionalEntityManager.save(orderProducts);

                res.status(201).json({
                    message: "Order created successfully",
                    order: {
                        ...savedOrder,
                        orderProducts
                    }
                });
            });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async updateOrderStatus(req: Request, res: Response) {
        try {
            const orderRepository = AppDataSource.getRepository("Order");
            const order = await orderRepository.findOneBy({ id: parseInt(req.params.id) });

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            const updatedOrder = await orderRepository.save({
                ...order,
                state: req.body.state
            });

            res.json({
                message: "Order status updated successfully",
                order: updatedOrder
            });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async deleteOrder(req: Request, res: Response) {
        try {
            const orderRepository = AppDataSource.getRepository("Order");
            const order = await orderRepository.findOneBy({ id: parseInt(req.params.id) });

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            await orderRepository.softDelete(req.params.id);
            res.json({ message: "Order deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default OrderController;