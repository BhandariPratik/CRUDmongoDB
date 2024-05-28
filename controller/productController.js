
const Product = require('../models/product.model')

const getProducts = (async (req, res) => {
    try {
        let products = await Product.find({});
        res.status(200).json({ data: products })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

const getProductsbyId = (async (req, res) => {
    try {
        const id = req.params;
        console.log('id', req.params)
        let products = await Product.findById((id?.id));
        res.status(200).json({ data: products })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

const AddProduct = (async (req, res) => {
    try {
        console.log('request data', req.body)
        let pro = await Product.create(req.body)
        res.status(200).json({ data: pro })
    }
    catch (err) {
        console.log('Errorrrrrrr', err)
        res.status(500).json({ message: err.message });
    }
})


const updateProduct = (async (req, res) => {
    try {
        let id = req?.params?.id;
        let updateData = await Product.findByIdAndUpdate(id, req.body);
        if (!updateData) {
            return res.status(404).json({
                message: 'Product not Found'
            })
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({ data: updatedProduct, message: 'success' })
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
})

const deleteProduct = (async (req, res) => {
    try {
        console.log("delete id", req.params.id)
        const id = req.params.id;
        let del = await Product.findByIdAndDelete(id);

        if (!del) {
            return res.status(404).json({ message: 'Product Not Found' })
        }

        let newRecord = await Product.find({})

        res.status(200).json({ data: newRecord, message: 'Product delete successgully' })
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
})




module.exports = {deleteProduct, updateProduct, getProducts, getProductsbyId, AddProduct };