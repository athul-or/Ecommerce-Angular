//import express

const express = require('express');

//import cors

const cors = require('cors');

//import dataService

const dataServices = require('./services/dataServices')

//create a app using express

const app = express();

//use json parser for server response

app.use(express.json())

//using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))

//setup a port number

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})

//api call to get all products

app.get('/all-products',(req,res)=>{
    dataServices.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})

//wishlist

app.post('/addtowishlist',(req,res)=>{
    dataServices.addToWishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})


//get wishlist


app.get('/getwishlist',(req,res)=>{
    dataServices.getWishlist().then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})


app.delete('/deletewish/:id',(req,res)=>{
    dataServices.deleteWish(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})