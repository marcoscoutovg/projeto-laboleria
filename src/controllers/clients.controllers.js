import { createClientDB, getOrdersByClientDB } from "../repositories/clients.repository.js"


export async function createClient(req, res) {
    try {
        await createClientDB(req.body)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }

}

export async function getOrdersByClient(req, res) {
    const { id } = req.params
    try {
        const ordersByClient = await getOrdersByClientDB(id)

        if (ordersByClient.rowCount === 0) return res.status(404).send({ message: "Não existem pedidos para esse cliente" })

        res.status(200).send(ordersByClient.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }

}
