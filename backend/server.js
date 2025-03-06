import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express(); 
dotenv.config({
  path: "config/.env",
});

console.log("MONGO_URI:", process.env.MONGO_URI);
connectDB();

app.use(express.json()); //for parsing application/json data to body

app.use("/api/products", productRoutes); //mounting the product routes at "/api/products"

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on http://localhost:${process.env.PORT}`);
});
