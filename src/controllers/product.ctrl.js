import Product from "../models/product.model.js"; 

export const createProduct = async (req, res) => {
  try {
    // Multer te da req.files con los datos de Cloudinary
    const images = req.files.map((file) => ({
      url: file.path,        // URL pública en Cloudinary
      idPublic: file.filename, // ID público para poder borrar
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
