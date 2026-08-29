const express = require("express");
const router = express.Router();
//controllers 
const {getProducts, updateProduct, createProduct, deleteProduct} = require('../controllers/productController.js')

// show GET products
router.get("/", getProducts);

// Create POST product
router.post("/", createProduct);

// Update PUT product
router.put("/:id", updateProduct);

//delete DELETE product
router.delete("/:id", deleteProduct)

module.exports = router;
