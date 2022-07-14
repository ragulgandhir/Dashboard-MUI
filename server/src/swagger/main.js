const register = require('./users/register')
const userDetail = require('./users/userDetail')
const userUpdate = require('./users/update')
const userDelete = require('./users/delete')
const userLogin = require('./users/login')
const adminLogin = require('./admin/login')
const productDetail = require('./products/productDetail')
const productUpdate = require('./products/update')
const productDelete = require('./products/delete')
const productadd = require('./products/add')
const categoryDetail = require('./categories/categoryDetail')
const categoryUpdate = require('./categories/update')
const categoryDelete = require('./categories/delete')
const categoryadd = require('./categories/add')
module.exports = {
  swagger: '2.0',
  info: {
    title: "User API's",
    version: '1.0.0',
    contact: {
      email: 'nagarajan.shenll@gmail.com'
    }
  },
  host: 'localhost:3000',
  basePath: '/api',
  tags: [
    {
      name: 'Users',
      description: 'Endpoints for users'
    },
    {
      name: 'Admin',
      description: 'Endpoints for admin'
    },
    {
      name: 'Products',
      description: 'Endpoints for products'
    }

  ],
  paths: {
    '/users/register': register,
    '/users/details/{id}': userDetail,
    '/users/update/{id}': userUpdate,
    '/users/delete/{id}': userDelete,
    '/users/login': userLogin,

    '/admin/login': adminLogin,

    '/products/add': productadd,
    '/products/details/{id}': productDetail,
    '/products/update/{id}': productUpdate,
    '/products/delete/{id}': productDelete,

    '/category/add': categoryadd,
    '/category/details/{id}': categoryDetail,
    '/category/update/{id}': categoryUpdate,
    '/category/delete/{id}': categoryDelete,
  }
}