import { createClientDB } from "../repositories/clients.repository.js"


export async function createClient(req,res) {
    try {
        await createClientDB(req.body)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
    
}