/**
 * OrdersController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const moment = require('moment');

module.exports = {

  orderPlaced: async function (req, res) {
    const { totalAmount, paymentMethod } = req.body;
    const paymentStatus = "pending";
    const orderStatus = "pending";
    const orderDate = moment().formate('YYYY-MM-DD');
    try {
      let cartData = await Cart.find().where({ userId: req.session.userId });
      if (!cartData) {

      }
      else {
        let user = await Users.find().where({ userId: req.session.userId });
        cartData.forEach( async (element) =>  {

          let orderPlaced = await Orders.create({
            userId: req.session.userId,
            productId: element.productId,
            address: user.address,
            totalAmount: p,
            paymentMethod: paymentMethod,
            paymentStatus: paymentStatus,
            orderStatus: orderStatus,
            orderDate: orderDate
          });




        });

        if(!orderPlaced){

          return res.redirect('back',{
            message :  "failed"
          })

        }
        else{

          return res.view('/shop/orderPlaced')

        }

      }
    } catch (error) {

      sails.log(error)

    }
  },



  deleteOrder: async function(req, res) {

    try {

      let orderId = req.params.id;

      let deleteOrder = await Orders.destroy({id:orderId});

      if(!deleteOrder){
        return res.view('/shop/orders',{
          message: "order deletion failed"
        })

      }
      else{
        return res.view('/shop/orders',{
          message: "order deletion successfull"
        })
      }
    } catch (error) {

      sails.log(error)

    }



  }

};

