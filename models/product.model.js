const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please Enter Product Name carefully........."],
        },

        quantity: {
            type: Number,
            require: true,
        },

        price: {
            type: Number,
            require: false,
            default: 0
        },

        image: {
            type: String,
            require: false
        }

    },
    {
        timestamps: true
    }
)
const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;