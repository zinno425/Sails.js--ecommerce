
module.exports = {



  createUser:async function(req,res){
    try{

      let firstName = req.body.firstName;
      let email = req.body.email;

      if(firstName == ''){
        return "empty not aloowed"
      }


      let valudate = await Users.findOne({email:email});
      if(!valudate){
        let afterCreate = await Users.create({
          email:email,
          firstName:firstName
        });


        if(afterCreate){
          sails.log('done');
          return res.json({ 'data':afterCreate });

        }else{
          sails.log('error');
        }
      }else{
        return res.json({ 'msg':'This email already in user' });

      }



    }catch(e){
      sails.log('Error,e',e);
    }

  },


  login : async function(req, res) {

    try {

      const {email , password} =req.body;

      let user = await Users.findOne({email: email, password: password});

      if(!user){

        return res.view('/shop/login',{
          message: "user not found"
        });




      }
      else{

        req.session.admin = admin;
        req.session.save();

        return res.view('/shop/index');


      }

    } catch (error) {

      sails.log("ERROR : " ,error);

    }
  },

};


