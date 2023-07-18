const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    sold: {
        type: Boolean,
        require: true
    },
    dateOfSale: {
        type: Date,
        require: true
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product