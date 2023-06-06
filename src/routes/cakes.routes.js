import { Router } from "express";
import { createCakes } from "../controllers/cakes.controllers.js";
import { validateCake } from "../middlewares/cakes.middleware.js";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { cakeSchema } from "../schemas/cakes.schema.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateSchema(cakeSchema), validateCake, createCakes)

export default cakesRouter;

