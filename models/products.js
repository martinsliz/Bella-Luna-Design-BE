'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.Review, {
        as: 'reviews',
        foreignKey: 'productId'
      })
      Products.belongsToMany(models.Order, {
        as: 'items',
        through: models.OrderList,
        foreignKey: 'productId'
      })
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Products',
      tableName: 'products'
    }
  )
  return Products
}
