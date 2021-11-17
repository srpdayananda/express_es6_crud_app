import express from 'express';
import countryController from "./country.controller";

export const countryRouter = express.Router();
countryRouter
.route('/')
.post(countryController.create)
.get(countryController.get)
.delete(countryController.delete)
.put(countryController.update)