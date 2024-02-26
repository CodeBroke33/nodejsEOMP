import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';

const productRouter = express.Router();

productRouter.get('/', (req, res)=>{
    try {
        products.fetchProducts(req, res);
    } catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve users"
        })
    }
})


export {
    productRouter
}