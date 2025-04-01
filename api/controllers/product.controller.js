const product = require('../models/product.model')

const getProducts = async (req, res) => {
    try {
        const products = await product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const productFound = await product.findById(id)
        res.status(200).json(productFound)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const addProduct = async (req, res) => {
    try {
        const productAdded = await product.create(req.body)
        res.status(200).json({
            message: 'Product added successfully',
            product: productAdded
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        // const updatedProduct = await product.findByIdAndUpdate(id, req.body, {new: true})
        // res.status(200).json(updatedProduct)
        const productUpdating = await product.findByIdAndUpdate(id, req.body)
        if (!productUpdating) {
            return res.status(404).json({ message: 'Product not found' })
        }
        const updatedProduct = await product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const productDeleting = await product.findByIdAndDelete(id)
        if (!productDeleting) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json({ message: 'Product deleted successfully' })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getProducts, getProductById, addProduct, updateProduct, deleteProduct
}