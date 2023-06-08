import { db } from "../database/database.connection.js";

export async function createClientDB(body) {
    const { name, address, phone } = body

    const result = await db.query(`INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3);`, [name, address, phone])

    return result;
}

export async function getOrdersByClientDB(id) {

    const result = await db.query(`SELECT orders.id AS "orderId", orders.quantity,
    orders."createdAt", orders."totalPrice", cakes.name AS "cakeName"
    FROM orders
    JOIN cakes ON orders."cakeId" = cakes.id WHERE orders."clientId" = $1;`, [id])

    return result;
}