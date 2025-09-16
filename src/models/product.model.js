import { Schema, model } from "mongoose";

const imageSchema = new Schema(
  {
    url: { type: String, required: true },
    idPublic: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new Schema({
  titulo: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },

  imagenes: { type: [imageSchema], default: [] },
});

export default model("Product", productSchema);
