module.exports = {
  attributes : {
   id:{
     type: 'integer',
     primaryKey: true,
     autoIncrement: true,
   },
   userName:{
     type: 'string',
   },
   email:{
    type: 'string',
   },
   password:{
    type: 'string',
   },
   isVerified:{
    type: 'string',
   },
   firstName:{
    type: 'string',
   },
   lastName:{
    type: 'string',
   },
   mobile:{
    type: 'string',
   },
   address:{
    type: 'string',
   },
   state : {
    type: 'string',
   },
   country:{
    type: 'string',
   },
   pincode : {
    type: 'string',
   },
   orders:{
    collection: 'orders',
    via: 'users'
   },
   cart : {
     collection: 'cart',
     via: 'users'

   }
  },
}
