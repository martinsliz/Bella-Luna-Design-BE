const router = require('express').Router()
const controller = require('../controllers/OrderListController')
const middleware = require('../middleware')

router.get('/:order_list_id', controller.GetOrderListById)

router.post(
  '/:order_id/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateOrderList
)

router.delete(
  '/:order_id/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteOrderList
)

module.exports = router
