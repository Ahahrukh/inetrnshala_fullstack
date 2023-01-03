const jwt = require('jsonwebtoken')

const authentication=(req,res,next)=>{
    if(!req.headers.authorization){
        return res.send("Invalid credential")
    }
    console.log(req.headers.authorization)
    const user_token = req.headers.authorization.split(" ")[1]
    jwt.verify(user_token,'shhhhh', function(err, decoded) {
        if(err){
            return res.send("Please login again")
        }
        console.log(decoded.email)
        req.body.email = decoded.email
        next()
    });
}
module.exports=authentication