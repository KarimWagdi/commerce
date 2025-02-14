import { Router } from "express";
import UserRoute from "./UserRoute";
import RateRoute from "./RateRoute";

const router = Router();

// routes

router.use("/users", UserRoute);
router.use("/rates", RateRoute);

export default router;
