import { db } from "../database/database.connection.js";

export async function searchClientByIdDB(clientId) {
    try {
        const client = await db.query(`SELECT * FROM clients WHERE id = $1;`, [clientId])

        return client
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function searchCakeByIdDB(cakeId) {
    try {
        const cake = await db.query(`SELECT * FROM cakes WHERE id = $1;`, [cakeId])

        return cake
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createOrderDB(body) {
    const { clientId, cakeId, quantity, totalPrice } = body

    try {
        const order = await db.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
        VALUES ($1, $2, $3, $4);`, [clientId, cakeId, quantity, totalPrice])

        return order
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getOrderDB(date) {

    try {
        const order = await db.query(`SELECT clients.id AS "idClient", clients.name AS "nameClient",
        clients.address, clients.phone, cakes.id AS "idCake", cakes.name AS "nameCake", cakes.price,
        cakes.image, cakes.description, orders.id AS "orderId",
        orders."createdAt", orders.quantity, orders."totalPrice" 
        FROM orders 
        JOIN clients 
            ON orders."clientId = clients.id
        JOIN cakes 
            ON orders."cakeId" = cakes.id`)

        return order.rows[0]
    } catch (err) {
        res.status(500).send(err.message)
    }
}