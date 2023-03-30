const router = require('express').Router()
const controller = require('../controllers/OrderController')
const middleware = require('../middleware')

router.get('/', controller.GetOrders)
router.get('/order_id', controller.GetOrderById)
router.post('/', controller.CreateOrder)
router.put(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateOrder
)
router.delete(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteOrder
)

module.exports = router
