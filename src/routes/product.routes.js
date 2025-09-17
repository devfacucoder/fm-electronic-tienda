import express from "express";
import { createProduct,getAllProducts } from "../controllers/product.ctrl.js";
import { upload } from "../config/cloudinary.js";

const productRoutes = express.Router();
productRoutes.get("/",async ( req,res)=>{
    try {
        const allProducts =  await getAllProducts()
        res.status(200).json({message:"todos los productos",data:allProducts})        
    } catch (error) {
        console.log(error)
    }
})
productRoutes.post("/", upload.array("imagenes", 5), createProduct);
// "imagenes" es el campo del form, y 5 es el máximo de archivos




export default productRoutes;
