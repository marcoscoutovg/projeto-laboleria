import { db } from "../database/database.connection.js";

export async function searchClientByIdDB(clientId) {
    const client = await db.query(`SELECT * FROM clients WHERE id = $1;`, [clientId])

    return client
}

export async function searchCakeByIdDB(cakeId) {
    const cake = await db.query(`SELECT * FROM cakes WHERE id = $1;`, [cakeId])

    return cake
}

export async function createOrderDB(body) {
    const { clientId, cakeId, quantity, totalPrice } = body

    const order = await db.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
        VALUES ($1, $2, $3, $4);`, [clientId, cakeId, quantity, totalPrice])

    return order
}

export async function getOrderDB(date) {

    const order = await db.query(`SELECT clients.id AS "idClient", clients.name AS "nameClient",
        clients.address, clients.phone, cakes.id AS "idCake", cakes.name AS "nameCake", cakes.price,
        cakes.image, cakes.description, orders.id AS "orderId",
        orders."createdAt", orders.quantity, orders."totalPrice" 
        FROM orders 
        JOIN clients 
            ON orders."clientId" = clients.id
        JOIN cakes 
            ON orders."cakeId" = cakes.id`)

    return order.rows
}

export async function getOrderByIdDB(id) {

    const order = await db.query(`SELECT clients.id AS "idClient", clients.name AS "nameClient",
        clients.address, clients.phone, cakes.id AS "idCake", cakes.name AS "nameCake", cakes.price,
        cakes.image, cakes.description, orders.id AS "orderId",
        orders."createdAt", orders.quantity, orders."totalPrice" 
        FROM orders 
        JOIN clients 
            ON orders."clientId" = clients.id
        JOIN cakes 
            ON orders."cakeId" = cakes.id
            WHERE orders.id = $1`, [id])

    return order.rows
}