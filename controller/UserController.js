import express from 'express';
import bodyParser from 'body-parser';

const userRouter = express.Router();


userRouter.get('/', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode, 
            msg: 'Failed to retrieve users'
        })
    }
})

export{
    userRouter, express
}   