const express = require('express');
const router = express.Router();
const { AppDataSource } = require("../dbConfig/data-source");

class Product{
    static getUser = async (req, res)=> {
    const productRepository = AppDataSource.getRepository("product");
      const users = await productRepository.find({relations:["category", 'user']});
      res.json(users);
    };

    static addUser = async (req, res)=> {
        const userRepository = AppDataSource.getRepository("User");
        const newUser = userRepository.create(req.body);
        const savedUser = await userRepository.save(newUser);
        res.json(savedUser);
    };

    static updateUser = async (req, res)=> {
        const userRepository = AppDataSource.getRepository("User");
        const user = await userRepository.findById(req.params.id)
        const updatedUser = await userRepository.save(req.body);
        res.json(updatedUser);
    };
    
    static deleteUser = async (req, res)=> {
        const userRepository = AppDataSource.getRepository("User");
        await userRepository.delete(req.body);

        res.json({ message: "User deleted successfully." });
    };
}
module.exports = Product