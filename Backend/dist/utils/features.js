import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/", {
        dbName: "Ecommerce_24",
    })
        .then((c) => console.log(`DB Connected to ${c.connection.host}`))
        .catch((e) => console.log("Error occured in connecting DB : " + e));
};
