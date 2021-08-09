module.exports = {
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
    },
    pName: {
      type: "string",
    },
    pPrice: {
      type: "string"
    },
    pCategory: {
      type: "string"
    },
    pDescription: {
      type: "string"
    },
    pImage: {
      type: "string"
    },
    pAvailability: {
      type: "string"
    },
    category: {
      model : 'category'
    },
    orders:{

    collection: 'orders',
    via: 'products'

    },
    cart : {
      collection: 'cart',
      via: 'products'
    }
  },
}
