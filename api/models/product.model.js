const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required']
        },

        quantity: {
            type: Number,
            required: [true, 'Product quantity is required'],
            default: 0
        },

        price: {
            type: Number,
            required: [true, 'Product price is required'],
            default: 0
        },

        imagePath: {
            type: String,
            required: false
        }
    },
    {
        timestamp: true
    }
);

const product = mongoose.model('Product', productSchema);

module.exports = product;  

