import "reflect-metadata";
import { DataSource } from "typeorm"; 
import { User } from "../entity/User";
import { Product } from "../entity/Product";
import { Wallet } from "../entity/wallet";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306, 
  username: "root",
  password: "Khaled_2004",
  database: "market",
  synchronize: true, 
  logging: true,
  entities: [User, Product, Wallet], 
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
