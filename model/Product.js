import {connection as db} from "../config/index.js"


class Products{
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
}

export {
    Products
}