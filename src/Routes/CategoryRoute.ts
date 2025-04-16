import { Router } from "express";
import CategoryController from "../Controller/CategoryController";
import verifyToken from "../MiddelWares/Auth";
const router = Router();

router.get("/", CategoryController.getCategory);

router.post("/", CategoryController.addCategory);

router.put("/:id", CategoryController.updateCategory);

router.delete("/:id", CategoryController.deleteCategory);

export default router;
