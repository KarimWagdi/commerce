import "reflect-metadata";
<<<<<<< HEAD
import { DataSource } from "typeorm"; 
import { User } from "../Entity/User";
import { Product } from "../Entity/Product";
import {Category} from "../Entity/Category";
=======
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Product } from "../entity/Product";
import { cart } from "../entity/Cart";
import { Wallet } from "../entity/wallet";
import { Rate } from "../entity/Rate";

>>>>>>> ef37c9fa0b903406ea902f6af6d3e956a1d9024c

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Password@12345",
  database: "commerce",
  synchronize: true,
  logging: true,
<<<<<<< HEAD
  entities: [User, Product, Category], 
=======
  entities: [User, Product, Rate, cart, Wallet],
>>>>>>> ef37c9fa0b903406ea902f6af6d3e956a1d9024c
  migrations: [],
  subscribers: [],
}); 


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization");
  });
