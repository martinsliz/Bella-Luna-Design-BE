const { Order, User, Product } = require('../models')
const sequelize = require('sequelize')
// const { Op } = require('sequelize')

const CreateOrder = async (req, res) => {
  try {
    let order = await Order.create({ ...req.body })
    res.send(order)
  } catch (error) {
    throw error
  }
}

const GetOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: User,
          attributes: ['id', 'firstName']
        },
        {
          model: Product,
          as: 'items',
          through: { attributes: [] },
          attributes: ['id', 'price']
        }
      ]
    })
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const GetOrderById = async (req, res) => {
  try {
    const orderId = parseInt(req.params.order_id)
    const order = await Order.findByPk(orderId, {
      include: [
        {
          model: User,
          attributes: ['id', 'firstName']
        },
        {
          model: Product,
          as: 'items',
          through: { attributes: [] },
          attributes: ['id', 'userId', 'price']
        }
      ]
    })
    res.send(order)
  } catch (error) {
    throw error
  }
}

const UpdateOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.order_id)
    let updatedOrder = await Order.update(req.body, {
      where: { id: orderId },
      returning: true
    })
    res.send(updatedOrder)
  } catch (error) {
    throw error
  }
}

const DeleteOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.order_id)
    await Order.destroy({ where: { id: orderId } })
    res.send({ msg: 'Order Deleted', payload: orderId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOrders,
  GetOrderById,
  CreateOrder,
  UpdateOrder,
  DeleteOrder
}
