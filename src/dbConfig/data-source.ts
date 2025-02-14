import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Rate } from "../entity/Rate";
import { Product } from "../entity/Product";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Password@12345",
  database: "software",
  synchronize: true,
  logging: true,
  entities: [User, Product, Rate],
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
