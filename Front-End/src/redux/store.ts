import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/userAPI";
import { userReducer } from "./reducer/userReducer";
import { productAPI } from "./api/productAPI";
import { cartReducer } from "./reducer/cartReducer";

export const server = import.meta.env.VITE_SERVER;

//creating a store
export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [userReducer.name]: userReducer.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  // middleware: (mid) => [...mid(), userAPI.middleware],----> changed
  middleware: (mid) => mid().concat(userAPI.middleware, productAPI.middleware),
});
