import joi from "joi";

export const orderSchema = joi.object({
    clientId: joi.number().integer().positive().required(),
    cakeId: joi.number().integer().positive().required(),
    quantity: joi.number().integer().min(1).max(4).required(),
    totalPrice: joi.number().integer().positive().required()
})