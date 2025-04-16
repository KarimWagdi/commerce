import express from "express";
import Routers from "./Routes/IndexRoute";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.post("/profile", upload.single("image"), function (req, res, next) {
  res.json("uploaded successfully");
});
app.use("/api", Routers);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.APP_PORT}`);
});
