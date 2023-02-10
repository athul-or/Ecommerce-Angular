//import db

const { Model, default: mongoose } = require('mongoose')
const db = require('./db')


//get all products details from db

const getProducts = () =>{
   return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Product not found'
                }
            }
        }
    )
}

// add to wishlist

const addToWishlist = (id,title,price,image,description) =>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Product is already in wishlist'
                }
            }
            else{
                const newProduct = new db.Wishlist({
                    id,title,price,image,description
                })
                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Product added to wishlist'
                }
            }
        }
    )
}

//get wishlist
const getWishlist = () =>{
    return db.Wishlist.find().then(
         (result)=>{
             if(result){
                 return{
                     status:true,
                     statusCode:200,
                     products:result
                 }
             }
             else{
                 return{
                     status:false,
                     statusCode:401,
                     message:'Wishlist is empty'
                 }
             }
         }
     )
 }


 //delete wishlist product

 const deleteWish = (id) =>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result,
                    message:'Product removed successfully'
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Wishlist is empty'
                }
            }
        }
    )
 }

module.exports = {
    getProducts,
    addToWishlist,
    getWishlist,
    deleteWish
}