import { Router } from "express";
import { createOrder, getOrder, getOrderById } from "../controllers/orders.controllers.js";
import { validateOrdersId } from "../middlewares/orders.middleware.js";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { orderSchema } from "../schemas/order.schema.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(orderSchema), validateOrdersId, createOrder)
ordersRouter.get("/orders", getOrder)
ordersRouter.get("/orders/:id", getOrderById)

export default ordersRouter;