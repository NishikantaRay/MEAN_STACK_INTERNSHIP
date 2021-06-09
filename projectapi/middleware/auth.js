const jwt = require("jsonwebtoken");
const secretKey = "contactManager";

const auth = async(req,res,next)=>{
    if(req.header("x-auth-token")){
        let token = req.header("x-auth-token");
        try{
            await jwt.verify(toke,secretKey);
            next();
        }catch(err){
            res.status(401).json({
                message : "Unauthorized request!! Bad token"
            })
        }
    }else{
        res.status(401).json({
            message : "Unauthorized request!! Token missing"
        });
    }
}

module.exports = auth;