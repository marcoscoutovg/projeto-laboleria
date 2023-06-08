import { createOrderDB, getOrderByIdDB, getOrderDB } from "../repositories/orders.repository.js"

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

        if (data.length === 0) return res.status(404).send({ message: "Não há pedidos" })

        const result = data.map((order) => {

            const orderResponse = {

                client: {
                    id: order.idClient,
                    name: order.nameClient,
                    address: order.address,
                    phone: order.phone
                },
                cake: {
                    id: order.idCake,
                    name: order.nameCake,
                    price: order.price,
                    description: order.description,
                    image: order.image
                },
                orderId: order.orderId,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice
            }

            return orderResponse
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getOrderById(req, res) {

    const { id } = req.params

    try {
        const data = await getOrderByIdDB(id)

        if (data.length === 0) return res.status(404).send({ message: "Esse pedido não existe" })

        const result = data.map((order) => {

            const orderResponse = {

                client: {
                    id: order.idClient,
                    name: order.nameClient,
                    address: order.address,
                    phone: order.phone
                },
                cake: {
                    id: order.idCake,
                    name: order.nameCake,
                    price: order.price,
                    description: order.description,
                    image: order.image
                },
                orderId: order.orderId,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice
            }

            return orderResponse
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}