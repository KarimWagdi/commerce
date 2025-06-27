import express from "express";
import Routers from "./Routes/IndexRoute";

import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", Routers);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.APP_PORT}`);
});
