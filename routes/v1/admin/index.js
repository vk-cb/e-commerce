const express = require('express')
const { authAdminContoller, authAdminRegisterContoller, LoginAdminController } = require('../../../controllers/admin/auth')
const { adminmiddleware } = require('../../../midddleware/admin')
const { createRole } = require('../../../controllers/roles')
const { AddProduct, getAllProducts } = require('../../../controllers/admin/products')
const router = express.Router()

// * register admin 
router.post('/admin/register', authAdminRegisterContoller)
router.post('/admin/login', LoginAdminController)

//create Role
router.post('/admin/create/role', adminmiddleware, createRole)

// * Products
router.post('/admin/add/product', adminmiddleware, AddProduct)
router.get('/admin/get/products', adminmiddleware, getAllProducts)


module.exports = router;