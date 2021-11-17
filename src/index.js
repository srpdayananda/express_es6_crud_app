import express from "express";
import { userRouter } from "./user";
import { countryRouter } from "./country";

export const restRouter = express.Router();

restRouter.use("/user", userRouter);
restRouter.use("/country", countryRouter);
