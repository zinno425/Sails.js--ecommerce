/**
 * Orders.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: 'integer',
      foreignKey: 'product'
    },
    userId: {
      type: 'integer',
      foreignKey: 'user'
    },
    address: {
      type: 'string'
    },
    totalAmount: {
      type: 'string'
    },
    paymentMethod: {
      type: 'string'
    },
    paymentStatus: {
      type: 'string'

    },
    orderStatus: {
      type: 'string'
    },
    orderDate: {
      type: 'date'
    },
    user:{

    },
    products: {
      model : 'products'
    },
    users: {
      model : 'users'
    }

  }
};

