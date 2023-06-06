import { searchCakeDB } from "../repositories/cakes.repository.js"

export async function validateCake(req, res, next) {

    const { name } = req.body
    
    try {
        const cake = await searchCakeDB(name)

        if (cake.rowCount > 0) return res.status(409).send({ message: "Esse nome já existe" })
        next()
    } catch (err) {
        res.sendStatus(500)
    }
}