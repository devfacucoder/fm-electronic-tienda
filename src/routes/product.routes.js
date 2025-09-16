import express from "express";
import { createProduct } from "../controllers/product.ctrl.js";
import { upload } from "../config/cloudinary.js";

const productRoutes = express.Router();

productRoutes.post("/", upload.array("imagenes", 5), createProduct);
// "imagenes" es el campo del form, y 5 es el máximo de archivos

export default productRoutes;
