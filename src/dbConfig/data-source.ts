import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";

import { Product } from "../entity/Product";

import { cart } from "../entity/Cart";
 
import { Wallet } from "../entity/wallet";

import { Rate } from "../entity/Rate";



export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Khaled_2004",
  database: "market",
  synchronize: true,
  logging: true,
  entities: [User, Product, Rate, Wallet, cart],
  migrations: [],
  subscribers: [],
}); 

// Initialize the connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization");
  });
