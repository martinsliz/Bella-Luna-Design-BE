const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const OrderListRouter = require('./OrderListRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/users', UserRouter)
Router.use('/products', ProductRouter)
Router.use('/orderlists', OrderListRouter)
Router.use('/orders', OrderRouter)
Router.use('/reviews', ReviewRouter)

module.exports = Router
