// exports.adminMiddleware = async(req, res, next)=>{
//     if(!req.user || req.user.role!== 'admin'){
//         return res.status(403).json({error: 'Forbidden'});
//     }
//     next();
// }
const jwt = require("jsonwebtoken")
const Admin = require('../../models/admin/auth')
const { handleErrorResponse } = require("../../utils/returnfunction")
const { statusCode } = require("../../utils/statusCodes")
const adminAuth = require("../../models/admin/auth")
const secret = process.env.JWT_SECRET
exports.adminmiddleware = async(req,res, next) =>{
    const token = req.header('token')
    if(!token){
      return handleErrorResponse(res, statusCode.badRequest, "please provide token")
    }
    // console.log("secret key",process.env.JWT_SECRET)
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.admin = await adminAuth.findOne({where:  {
            id : decoded.id
        }})
        // console.log(decoded)
        if(!req.admin){
           return handleErrorResponse(res, statusCode.unauthorized, "Unauthorized entry")
        }
        if(req.admin.roleId !== 2){
            return handleErrorResponse(res, statusCode.unauthorized, "You are not authorized to access this route")   
 
        }
        next()
        
    } catch (error) {
        console.error("Token verification error:", error);
       return handleErrorResponse(res, statusCode.error, "Token is not valid")
    }
}