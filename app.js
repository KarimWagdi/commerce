const express = require('express');

const { AppDataSource } = require("./src/dbConfig/data-source");

const  router  = require('./src/Routes/index');

const app = express();


app.use(express.json());


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    
    app.use('/api', router)

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    
  }).catch((error) => {
    console.error("Error connecting to the database:", error);
  });