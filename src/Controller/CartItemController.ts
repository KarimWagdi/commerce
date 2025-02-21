import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";
import { Product } from "../entity/Product";

class CartItemController {

    static getCartItem =  async ( request: any, response: Response ): Promise<void> => {
        try{
            console.log(request.user);
        const CartItemRepository = AppDataSource.getRepository("cart_items");
        const Cart = await CartItemRepository.find();
        response.json(Cart);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };
    
    static addCartItem =  async ( request: any, response: Response ): Promise<void> => {
        try{
            const CartRepository = AppDataSource.getRepository("cart");
            const CartItemRepository = AppDataSource.getRepository("cart_items");
            const productRepository = AppDataSource.getRepository(Product);
            const cart = await CartRepository.findOne({where:{user_id:request.user.id}});
            const product = await productRepository.findOne({where:{id:request.body.product_id}});
            console.log(cart?.id,request.body.product_id);
            const isExist = await CartItemRepository.findOne({ where:{ cart_id: +cart?.id, product_id: { id: request.body.product_id }}});
            if(!isExist){
                const newCartItem = CartItemRepository.create({...request.body, cart_id: cart?.id, quantity: 1, total_item_price: product?.price });
                const data = await CartItemRepository.save(newCartItem);
                response.json(data);
                return
            }else{
                let obj ={
                    ...request.body,
                    cart_id: cart?.id,
                    quantity: +isExist.quantity + 1,
                    total_item_price:(+isExist.quantity + 1) * ( product?.price ?? 0)
                }
                await CartItemRepository.update(isExist.id, obj);
                const data = await CartItemRepository.findOne({where:{cart_id: cart?.id, product_id: request.body.product_id}});
                response.json(data);
                return
            }
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    // static updateCart =  async ( request: any, response: Response ): Promise<void> => {
    //     try{
    //     const CartRepository = AppDataSource.getRepository("cart");
    //     const Cart= await CartRepository.findOne(request.params.id)
    //     const updatedCart= await CartRepository.save(request.body);
    //     response.json(updatedCart);
    //     } catch(error){
    //         response.status(500).json({ message: error });
    //     }
    // };
    
    static deleteUser =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const CartRepository = AppDataSource.getRepository("cart");
        await CartRepository.delete(request.body);
        response.json({ message: "Cart deleted successfully." });
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    

}

export default CartItemController;