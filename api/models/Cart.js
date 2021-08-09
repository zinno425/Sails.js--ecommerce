/**
 * Cart.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    userId:{
      type: 'integer',
      foreignKey: 'user'
    },
    productId:{
      type: 'integer',
      foreignKey: 'product'
    },
    users:{
      model: 'users'
    },
    products: {
      model: 'products'
    }
  }
};
