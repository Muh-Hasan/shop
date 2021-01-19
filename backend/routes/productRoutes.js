import express from "express";
import {
  getProdcts,
  getProdctsById,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProdcts);

router.route("/:id").get(getProdctsById);

export default router;
