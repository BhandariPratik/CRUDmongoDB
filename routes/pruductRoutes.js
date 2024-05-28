const express = require('express');
const router = express.Router();
const ProductController = require('../controller/productController')

router.get('/getProduct', ProductController.getProducts);
router.get('/getProductbyId', ProductController.getProductsbyId);
router.post('/addProduct', ProductController.AddProduct);
router.patch('/updateProduct', ProductController.updateProduct);
router.delete('/deleteProduct', ProductController.deleteProduct);


module.exports = router;