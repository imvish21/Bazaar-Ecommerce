import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { NewOrderRequestBody } from "../types/types.js";

export const newOrder = TryCatch(
  async (req: Request<{}, {}, NewOrderRequestBody>, res, next) => {}
);
