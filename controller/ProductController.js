import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';
// import { users } from '../model/index.js'


const productRouter = express.Router();

// get product
productRouter.get('/', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})

// get product by ID
productRouter.get('/:id', (req, res)=>{
    try{
        products.fetchProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a product'
        })
    }
})

// Add product
productRouter.post('/addProduct', bodyParser.json(), (req, res)=>{
    try{
        products.addProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new product.'
        })
    }
})

export {
    productRouter
}