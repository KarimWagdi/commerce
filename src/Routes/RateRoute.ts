import { Router } from "express";
import RateController from "../Controller/RateController";
import verifyToken from "../MiddelWares/Auth";
const router = Router();

router.get("/",verifyToken, RateController.getRate);
router.post("/",verifyToken, RateController.addRate);
router.put("/:id",verifyToken, RateController.updateRate);
router.delete("/:id",verifyToken, RateController.deleteRate);

export default router;
