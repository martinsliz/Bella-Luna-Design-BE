'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class OrderList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderList.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      productId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'OrderList',
      tableName: 'order_lists'
    }
  )
  return OrderList
}
