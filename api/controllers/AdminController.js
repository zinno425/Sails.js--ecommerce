/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  login : async function(req, res) {

    try {

      const {userName , password} =req.body;

      let admin = await Admin.findOne({userName: userName, password: password});

      if(!admin){

        return res.redirect('/admin/login',{
          message: "user not found"
        });




      }
      else{

        req.session.admin = admin;
        req.session.save();

        return res.redirect('/admin/index');


      }

    } catch (error) {

      sails.log("ERROR : " ,error);

    }
  },

  addProduct : async function(req, res) {

    try {
      const {pName,pPrice,pCategory,pDescription,pImage,pAvailibity } = req.body;



    let addProduct = await Products.create({
      pName:pName,
      pPrice:pPrice,
      pCategory:pCategory,
      pDescription:pDescription,
      pImage:pImage,
      pAvailibity:pAvailibity
    });


    if(!addProduct){
      return res.view('/admin/addProduct',{

        message: "Add product failed"

      })


    }
    else{
      return res.view('/admin/addProduct',{
        message: "Add product successfull"
      })
    }
    } catch (error) {

      sails.log(error)

    }



  },


  viewProduct: async function(req, res) {


    try {
      let product = await Products.find();

    if(!product){

      res.send(500,{error:error});

    }
    else{
      return res.view('/admin/viewProduct',{
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
      return res.view('/admin/editProduct',{
        product : product
      })
    }


    } catch (error) {

      sails.log(error)

    }






  },


  deleteProduct: async function(req, res) {

    try {

      let productId = req.params.id;

      let deleteProduct = await Products.destroy({id:productId});

      if(!deleteProduct){
        return res.view('/admin/viewProduct',{
          message: "product deletion failed"
        })

      }
      else{
        return res.view('/admin/viewProduct',{
          message: "product deletion successfull"
        })
      }
    } catch (error) {

      sails.log(error)

    }
  },





editProduct: async function(req, res){

  try {
    const {pName,pPrice,pCategory,pDescription,pImage,pAvailibity } = req.body;



  let addProduct = await Products.update({id:req.params.id},{
    pName:pName,
    pPrice:pPrice,
    pCategory:pCategory,
    pDescription:pDescription,
    pImage:pImage,
    pAvailibity:pAvailibity
  });


  if(!addProduct){
    return res.view('/admin/viewProduct',{
      message: "update product failed"
    })


  }
  else{
    return res.view('/admin/viewProduct',{
      message: "update product successfull"
    })
  }
  } catch (error) {

    sails.log(error)

  }


}









};

