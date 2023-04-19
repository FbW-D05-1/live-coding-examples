const jwt = require("jsonwebtoken");


const authenticate = async(req,res,next)=>{

const secretKey = process.env.SECRETKEY;
try {
   
    const token = req.cookies.token;
if(!token){
    return res.status(500).json({ msg:"server error, no token"})
}
const decode = await jwt.verify(token,secretKey);
req.user = decode;
next();
    
} catch (error) {
    console.log(error);
    return res.status(500).json({ msg:"server error"});
    
}


}

module.exports = authenticate;