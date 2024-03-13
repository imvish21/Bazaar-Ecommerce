import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache"; //NodeCache is a inbuilt class in this package.
import { config } from "dotenv";

// Importing Routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import orderRoute from "./routes/order.js";

config({
  path: "./.env",
});

const port = process.env.PORT || 4000;

connectDB();

export const myCache = new NodeCache();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
