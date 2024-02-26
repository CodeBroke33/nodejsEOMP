import {connection as db} from "../config/index.js"


class Users{
    // mulitple Users
    fetchUsers(req, res) {
        const qry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPwd, userRole
        FROM Users;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    // single User
    fetchUser(req, res) {
        const qry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPwd, userRole
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    // Create a User
    async createUser(req, res) {
        // Payload
        let data = req.body
        data.userPwd = await hash(data?.userPwd, 8)
        let user = {
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `     
        db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'This email address already exist'
                })
            }else {
                // Create a token
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'You\'re registered'
                })
            }
        })   
    }
    
}

export {
    Users
}