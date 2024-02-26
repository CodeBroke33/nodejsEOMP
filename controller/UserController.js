import express from "express";

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
// Fetch user
userRouter.get('/:id', (req, res)=>{
    try{
        users.fetchUser(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a user'
        })
    }
})

export{
    userRouter, express
}