const jwt = require('jsonwebtoken')

const authentication=(req,res,nex)=>{
    if(!req.headers.authorization){
        return res.send("Invalid credential")
    }
    const user_token = req.headers.authorization.split(" ")[1]
    jwt.verify(user_token,'shhhhh', function(err, decoded) {
        if(err){
            return res.send("Please login again")
        }
        console.log(decoded)
        req.body.email = decoded.email
        next()
    });
}
module.exports=authentication