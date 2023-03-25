const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const BoxRouter = require('./BoxRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/users', UserRouter)
Router.use('/boxes', BoxRouter)
Router.use('/products', ProductRouter)
Router.use('/orders', OrderRouter)
Router.use('/reviews', ReviewRouter)

module.exports = Router
