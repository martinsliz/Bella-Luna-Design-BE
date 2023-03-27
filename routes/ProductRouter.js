const router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

router.get('/', controller.GetProducts)

router.post('/', controller.CreateProduct)

router.get('/:product_id', controller.GetProductById)
router.get('/category/:product_category', controller.getProductByCategory)
//refer to Get Class By Subject
router.put(
  '/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProduct
)
router.delete(
  '/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteProduct
)

module.exports = router
