
const userModel = require("../models/user.model")


const authorisation = (permittedRoles) => {

    return async (req, res, next) => {
        let {email} = req.body
        const user = await userModel.findOne({email})
        //permittedRoles - array of string/strings
          console.log(user)
        //.includes
        
        if(permittedRoles.includes(user.role)){
          return next()
        }
         return res.send("not authorised")
        
    }
}
 

module.exports = authorisation;

