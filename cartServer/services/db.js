//import mongoose

const mongoose = require('mongoose');

//define connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('Database Connected')
})

//create a model for products

const Product  = mongoose.model('Product',{
    //schema
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//create new collection in mongoDB-create a model
const Wishlist = mongoose.model('wishlist',{
    id:Number,
    title:String,
    price:Number,
    image:String,
    description:String
})


module.exports = {
    Product,Wishlist
}
