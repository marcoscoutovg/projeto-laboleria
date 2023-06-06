import { searchCakeByIdDB, searchClientByIdDB } from "../repositories/orders.repository.js";

export async function validateOrdersId(req, res, next) {

    const { clientId, cakeId } = req.body
    try {
        const client = await searchClientByIdDB(clientId)
        const cake = await searchCakeByIdDB(cakeId)

        if (client.rowCount === 0) return res.status(404).send({ message: "Cliente não encontrado" })
        if (cake.rowCount === 0) return res.status(404).send({ message: "Bolo não encontrado" })

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }

}