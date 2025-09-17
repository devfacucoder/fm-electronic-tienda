import express from "express";

const app = express();

//
import { createRole } from "./controllers/createRoles.js";
createRole();
//database conecte
import { mongoose } from "./db.js";

//imports Middlewars
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
//middlewars
app.use(express.json());
    
//routes creation

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);

export default app;
