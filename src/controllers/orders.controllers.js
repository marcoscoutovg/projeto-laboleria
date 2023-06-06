import { createOrderDB, getOrderDB } from "../repositories/orders.repository.js"

export async function createOrder(req, res) {
    try {
        await createOrderDB(req.body)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getOrder(req, res) {

    const { date } = req.query

    try {
        const data = await getOrderDB(date)

        const order = {
            client: {
                id: data.idClient,
                name: data.nameClient,
                address: data.address,
                phone: data.phone
            },
            cake: {
                id: data.idCake,
                name: data.nameCake,
                price: data.price,
                description: data.description,
                image: data.image
            },
            orderId: data.orderId,
            createdAt: data.createdAt,
            quantity: data.quantity,
            totalPrice: data.totalPrice
        }

        res.status(200).send(order)
    } catch (err) {
        res.status(500).send(err.message)
    }
}