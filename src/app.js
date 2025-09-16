import express from "express";

const app = express();

//database conecte
import { mongoose } from "./db.js";

//imports Middlewars
import productRoutes from "./routes/product.routes.js";

//middlewars
app.use(express.json());

//routes creation
app.use("/api/products", productRoutes);

export default app;
