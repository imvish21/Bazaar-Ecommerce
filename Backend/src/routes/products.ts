import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

//To Create New Products - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

//To get last 10 products - /api/v1/product/latest
app.get("/latest", getlatestProducts);

//To get all unique categories - /api/v1/product/categories
app.get("/categories", getAllCategories);

//To get all Products - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
