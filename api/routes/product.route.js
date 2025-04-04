const express = require('express')
const router = express.Router()
const {getProducts, getProductById, addProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')



router.get('/', getProducts)
router.get('/:id', getProductById)

router.post('/', addProduct)

// update product
router.put('/:id', updateProduct)

// delete product
router.delete('/:id',deleteProduct )

module.exports = router
