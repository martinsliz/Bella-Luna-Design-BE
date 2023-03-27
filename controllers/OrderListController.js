const { OrderList } = require('../models')

const GetOrderListById = async (req, res) => {
  try {
    const orderListId = parseInt(req.params.orderlist_id)
    const orderList = await OrderList.findOne({
      where: { id: orderListId }
    })
    res.send(orderList)
  } catch (error) {
    throw error
  }
}

const CreateOrderList = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let orderId = parseInt(req.params.order_id)
    let orderListBody = {
      userId,
      orderId
    }
    let orderList = await OrderList.create(orderListBody)
    res.send(orderList)
  } catch (error) {
    throw error
  }
}

const DeleteOrderList = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let orderId = parseInt(req.params.order_id)
    await OrderList.destroy({ where: { userId: userId, orderId: orderId } })
    res.send({
      message: `Deleted order list with an user id of ${userId} and order id of ${orderId} `
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOrderListById,
  CreateOrderList,
  DeleteOrderList
}
