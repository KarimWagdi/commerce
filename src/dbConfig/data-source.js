const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "mysql", // postgres, sql
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Password@12345",
  database: "market",
  synchronize: true, // Automatically creates tables; turn off in production
  logging: false,
  entities: [__dirname + "/../entity/*.js"], 
  migrations: [],
  subscribers: [],
});

module.exports = { AppDataSource };
