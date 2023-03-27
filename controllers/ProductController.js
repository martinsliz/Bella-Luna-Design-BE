const { Product, Review } = require('../models')
const sequelize = require('sequelize')
// const { Op } = require('sequelize')

const CreateProduct = async (req, res) => {
  console.log(req.body)
  try {
    // let productBody = { req.body }
    let myProduct = await Product.create({ ...req.body })
    res.send(myProduct)
  } catch (error) {
    throw error
  }
}

const GetProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Review,
          as: 'reviews',
          attributes: ['content']
        }
      ]
    })
    res.send(products)
  } catch (error) {
    throw error
  }
}

const GetProductById = async (req, res) => {
  try {
    const productId = parseInt(req.params.product_id)
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Review,
          as: 'reviews',
          attributes: ['id', 'userId', 'content']
        }
      ]
    })
    res.send(product)
  } catch (error) {
    throw error
  }
}

const getProductByCategory = async (req, res) => {
  try {
    const productCategory = req.params.product_category
    const product = await Product.findAll({
      where: {
        category: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('category')),
          'LIKE',
          productCategory.toLowerCase() + '%'
        )
      }
    })
    res.send(product)
  } catch (error) {
    throw error
  }
}

const UpdateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.product_id)
    let updatedProduct = await Product.update(req.body, {
      where: { id: productId },
      returning: true
    })
    res.send(updatedProduct)
  } catch (error) {
    throw error
  }
}

const DeleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.product_id)
    await Product.destroy({ where: { id: productId } })
    res.send({ msg: 'Product Deleted', payload: productId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateProduct,
  GetProducts,
  GetProductById,
  getProductByCategory,
  UpdateProduct,
  DeleteProduct
}
