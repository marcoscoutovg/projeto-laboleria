import { db } from "../database/database.connection.js";

export async function createClientDB(body) {
    const { name, address, phone } = body

    const result = await db.query(`INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3);`, [name, address, phone])

    return result;
}