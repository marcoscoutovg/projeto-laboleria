import { createCakesDB } from "../repositories/cakes.repository.js"

export async function createCakes(req,res) {
    try {
        await createCakesDB(req.body)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
    
}