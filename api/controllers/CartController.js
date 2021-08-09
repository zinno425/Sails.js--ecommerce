/**
 * CartController
 *
 * @description :: Server-side logic for managing carts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addToCart: async function (req, res) {
    try {

      let productId = req.params.productId;

      let addToCart = await Cart.create({ userId: req.session.userId, productId: productId });

      if (!addToCart) {

        return res.redirect('back', {
          message: 'product adding to cart failed'
        })

      }
      else {
        return res.redirect('back', {
          message: 'product adding to cart successfull'
        })

      }



    } catch (error) {

      sails.log(error)
    }




  },


  deleteFromCart: async function (req, res) {


    try {

      let cartId = req.params.id;

      let deleteFromCart = await Cart.destroy({ id: cartId });
      if (!deleteFromCart) {
        return res.redirect('back', {
          message: "failed"
        });
      }
      else {
        return res.redirect('back', {
          message: "successfull"
        });

      }


    } catch (error) {

      sails.log(error)

    }




  },

  viewCart: async function (req, res) {
    try {
      let viewCart = await Cart.find({ userId: req.session.userid});

      if (!viewCart) {

        return res.redirect('back', {
          message : "no item in cart "
        })

      }
      else
      {
        return res.redirect('back', {
          cart : viewCart
        })
      }

    } catch (error) {
      sails.log(error)

    }


  }

};

