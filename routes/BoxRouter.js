const router = require('express').Router()
const controller = require('../controllers/BoxController')
const middleware = require('../middleware')

router.get('/:box_id', controller.GetBoxById)

router.post(
  '/:order_id/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateBox
)

router.delete(
  '/:order_id/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBox
)

module.exports = router
