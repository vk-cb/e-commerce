const adminAuth = require("../../models/admin/auth");
const { statusCode } = require("../../utils/statusCodes");
const { handleErrorResponse, handleSuccessResponse } = require("../../utils/returnfunction");
const bcrypt = require('bcrypt')
const salt = process.env.HASH_SALT
const jwt = require('jsonwebtoken')
exports.authAdminRegisterContoller = async(req, res)=>{
    const {name, email, password,roleId} = req.body;
    // Validation
    console.log(req.body)
    if(!name ||!email ||!password || !roleId){
        
        return handleErrorResponse(res, statusCode.badRequest, "All fields are required");
    }
    try{
        const findUser = await adminAuth.findOne({where: {email}})
        if(findUser){
            return handleErrorResponse(res, statusCode.badRequest, "Email already exists")
        }
        const hashedPassword = await bcrypt.hash(password, Number(salt))
        const newUser = await adminAuth.create({name, email,roleId, password: hashedPassword})
        return handleSuccessResponse(res,statusCode.success, "User created successfully", newUser )
    }catch(err){
        return handleErrorResponse(res, statusCode.error, err.message)
    }
}

exports.LoginAdminController = async(req, res)=>{
    const {email, password} = req.body;
    // Validation
    if(!email ||!password){
        return handleErrorResponse(res, statusCode.badRequest, "Email and password are required");
    }
    try{
        const findUser = await adminAuth.findOne({where: {email}})
        if(!findUser){
            return handleErrorResponse(res, statusCode.badRequest, "User not found")
        }
        const isMatch = await bcrypt.compare(password, findUser.password)
        if(!isMatch){
            return handleErrorResponse(res, statusCode.badRequest, "Invalid Password plese enter correct password")
        }
        const payload = {id: findUser.id, roleId: findUser.roleId, email : findUser.email, isActive: findUser.isActive}
        const token = jwt.sign(payload, process.env.JWT_SECRET)
        return handleSuccessResponse(res, statusCode.success, "Logged in successfully", {token, data : payload})
    }catch(err){
        return handleErrorResponse(res, statusCode.error, "Server Error")
    }
}