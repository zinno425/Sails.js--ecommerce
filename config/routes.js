/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/







  /** admin get  routes */

  'GET /admin': { view: 'admin/index', locals: { layout: 'admin/layout' } },
  'GET /admin/login': { view: 'admin/login', locals: { layout: 'admin/layout' } },
  'GET /admin/viewProduct': 'AdminController.viewProduct',
  'GET /admin/add': { view: 'admin/addProduct', locals: { layout: 'admin/layout' } },
  'GET /admin/editProduct': 'AdminController.viewProductById',


  /** admin post routes */


  'POST /admin/signin': 'AdminController.login',
  'POST /admin/addProduct': 'AdminController.addProduct',
  'POST /admin/updateProduct': 'AdminController.editProduct',
  'POST /admin/deleteProduct': 'AdminController.deleteProduct',


  /** user get routes */


  'GET /login': { view: 'shop/login', locals: { layout: 'shop/layout' } },
  'GET /register': { view: 'shop/register', locals: { layout: 'shop/layout' } },
  'GET /accountVerification': 'UserController.verifyAccount',

  /** user post routes */

  'POST /login': 'UserController.login',
  'POST /register': 'UserController.register',


  /** shop get routes */
  'GET /' : 'ProductsController.viewProduct',




  'GET /orders': { view: 'shop/orders', locals: { layout: 'shop/layout' } },
  'GET /cart': { view: 'shop/cart', locals: { layout: 'shop/layout' } },
  'GET /profile': { view: 'shop/profile', locals: { layout: 'shop/layout' } },
  'GET /orderPlaced': { view: 'shop/orderPlaced', locals: { layout: 'shop/layout' } },


  /** shop  post routes */
  'POST /addToCart': 'ProductController.addToCart',







  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
