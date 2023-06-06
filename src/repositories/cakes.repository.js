import { db } from "../database/database.connection.js"

export async function createCakesDB(body) {
    const { name, price, image, description } = body

    const result = await db.query(`INSERT INTO cakes (name, price, image, description) 
    VALUES ($1, $2, $3, $4);`, [name, price, image, description])

    return result;
}

export async function searchCakeDB(name) {
    const result = await db.query(`SELECT * FROM cakes WHERE name = $1`, [name])

    return result
}