import {connection as db} from "../config/index.js"


class Products{
    // Mulitple Products
    fetchProducts(req, res){
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount, userID
        FROM Products;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    // Single Product
    fetchProduct(req, res){
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount, userID
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
}

export {
    Products
}