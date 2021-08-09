/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {


  viewProduct: async function(req, res) {

sails.log('==================debug================');

    try {
      let product = await Products.find();
    if(!product){
      res.send(500,{error:error});
    }
    else{
      console.log(product);
      return res.view('shop/home',{
        layout : 'shop/layout',
        product : product
      })
    }
    } catch (error) {
      sails.log(error)
    }
  },
  viewProductById: async function(req, res) {
    try {
      const productId = req.params.id;
      let product = await Products.find({id:productId});
    if(!product){
      res.send(500,{error:error});
    }
    else{
      return res.view('/shop/details',{
        product : product
      })
    }
    } catch (error) {
      sails.log(error)
    }
  },
};
