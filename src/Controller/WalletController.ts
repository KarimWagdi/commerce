import { Response } from "express";
import bcrypt from "bcrypt";
import { AppDataSource } from "../dbConfig/data-source";
import { Wallet } from "../entity/wallet";
const jwt = require('jsonwebtoken');

const jwtSecret = 'your-secret-key';

class WalletController {

    static getWallet =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const WalletRepository = AppDataSource.getRepository("Wallet");
        const Wallets = await WalletRepository.find();
        response.json(Wallets);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    static addWallet =  async ( request: any, response: Response ): Promise<void> => {
        try{
            const WalletRepository = AppDataSource.getRepository("Wallet");
            const savedWallet = await WalletRepository.save(request.body);
            const token = jwt.sign({ WalletId: savedWallet.id }, jwtSecret, { expiresIn: '1h' });
            // await WalletRepository.update(savedWallet.id, {token: token});
            response.send({accessToken: token, Wallet: savedWallet});
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

    static updateWallet =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const WalletRepository = AppDataSource.getRepository("Wallet");
        const Wallet = await WalletRepository.findOne(request.params.id)
        const updatedWallet = await WalletRepository.save(request.body);
        response.json(updatedWallet);
        } catch(error){
            response.status(500).json({ message: error });
        }
    };
    
    static deleteWallet =  async ( request: any, response: Response ): Promise<void> => {
        try{
        const WalletRepository = AppDataSource.getRepository("Wallet");
        await WalletRepository.delete(request.body);
        response.json({ message: "Wallet deleted successfully." });
        } catch(error){
            response.status(500).json({ message: error });
        }
    };

}

export default WalletController;