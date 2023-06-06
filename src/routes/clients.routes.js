import { Router } from "express";
import { createClient } from "../controllers/clients.controllers.js";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { clientSchema } from "../schemas/clients.schema.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(clientSchema), createClient)
clientsRouter.get("/clients/:id/orders")

export default clientsRouter;