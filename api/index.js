const express = require('express')
const mongoose = require('mongoose')
const product = require('./models/product.model');
const productRoute = require('./routes/product.route')

const app = express()
//initilaising a middle ware 
app.use(express.json());


//for form imputs rather than JSON 
app.use(express.urlencoded({ extended: false }));


//routes 
app.use('/api/products', productRoute)



mongoose.connect("mongodb+srv://kaleabwondwossen12:rbACngaob5XyvJ9g@dastabasedb.rnu5m.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=DastabaseDB ").then(() => {
    app.listen(8000, () => {
        console.log('Server is running on port 8000')
    })

    console.log('Connected to MongoDB')
}).catch(() => {
    console.log('Connection failed')
})
app.get('/', (req, res) => {
    res.send(`Welcome to Node API : PORT 8000`)
})

module.exports =  app











// app.get(
//     '/api/products', async (req, res) => {
//         try {
//             const products = await product.find({})
//             res.status(200).json(products)
//         } catch (error) {
//             res.status(500).json({
//                 message: error.message
//             })
//         }
//     }
// )

// app.get(
//     '/api/products/:id', async (req, res) => {
//         try {
//             const { id } = req.params
//             const productFound = await product.findById(id)
//             res.status(200).json(productFound)
//         } catch (error) {
//             res.status(500).json({
//                 message: error.message
//             })
//         }
//     }
// )

// // app.post('/api/products', (req, res)=>{
// //     console.log(req.body)
// //     res.send(req.body)
// //     // res.send('Product added')
// // });


// app.post('/api/products', async (req, res) => {
//     try {
//         const productAdded = await product.create(req.body)
//         res.status(200).json({
//             message: 'Product added successfully',
//             product: productAdded
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// });


// //update product 
// app.put(
//     '/api/products/:id', async (req, res) => {
//         try {
//             const { id } = req.params
//             // const updatedProduct = await product.findByIdAndUpdate(id, req.body, {new: true})
//             // res.status(200).json(updatedProduct)
//             const productUpdating = await product.findByIdAndUpdate(id, req.body)
//             if (!productUpdating) {
//                 return res.status(404).json({ message: 'Product not found' })
//             }
//             const updatedProduct = await product.findById(id)
//             res.status(200).json(updatedProduct)
//         } catch (error) {
//             res.status(500).json({
//                 message: error.message
//             })
//         }

//     }
// )


// // delet product

// app.delete(
//     '/api/products/:id', async (req, res) => {
//         try {
//             const { id } = req.params
//             const productDeleting = await product.findByIdAndDelete(id)
//             if (!productDeleting) {
//                 return res.status(404).json({ message: 'Product not found' })
//             }
//             res.status(200).json({ message: 'Product deleted successfully' })
//         } catch (error) {
//             res.status(500).json({
//                 message: error.message
//             })
//         }
//     }
// )