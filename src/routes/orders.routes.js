import { Router } from "express";
import { createOrder } from "../controllers/orders.controllers.js";
import { validateOrdersId } from "../middlewares/orders.middleware.js";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { orderSchema } from "../schemas/order.schema.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(orderSchema), validateOrdersId, createOrder)
ordersRouter.get("/orders", )
ordersRouter.get("/orders/:id")

export default ordersRouter;