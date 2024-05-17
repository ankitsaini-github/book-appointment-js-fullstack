const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
// router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET

router.get('/users', adminController.getUsers);

// /admin/add-product => POST
router.post('/add-user', adminController.postAddUser);

// router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-user', adminController.postEditUser);

router.post('/delete-user', adminController.postDeleteUser);

module.exports = router;
