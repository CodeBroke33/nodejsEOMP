import express from "express";

const userRouter = express.Router();

// Fetch Users Plural

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
// Fetch user Single
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

// Add a user
userRouter.post('/register', bodyParser.json(), (req, res)=>{
    try{
        users.createUser(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new user.'
        }) 
    }
})

//  Update User

userRouter.post('/register', bodyParser.json(), (req, res)=>{
    try{
        users.createUser(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new user.'
        }) 
    }
})

export{
    userRouter, express
}