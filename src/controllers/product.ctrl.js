import Product from "../models/product.model.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getAllProducts = async () => {
  try {
    const productsDB = await Product.find();
    return productsDB;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const images = req.files.map((file) => ({
      url: file.path,
      idPublic: file.filename,
    }));

    const newProduct = new Product({
      titulo: req.body.titulo,
      precio: req.body.precio,
      stock: req.body.stock,
      description: req.body.description,
      imagenes: images,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear producto" });
  }
};


