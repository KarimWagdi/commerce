const { AppDataSource } = require("../dbConfig/data-source");

class Category{
    static getUser = async (req, res)=> {
    const userRepository = AppDataSource.getRepository("user");
      const users = await userRepository.find();
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
module.exports = User