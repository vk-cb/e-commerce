const Role = require("../../services/models/roles");
const { handleErrorResponse, handleSuccessResponse } = require("../../utils/returnfunction");
const { statusCode } = require("../../utils/statusCodes");

exports.createRole = async(req, res)=>{
    const {name} = req.body;
    if(!name) {
        return handleErrorResponse(res, statusCode.badRequest, "Please enter role name")
    }
    try {
        const newRole = await Role.create({name})
        return handleSuccessResponse(res, statusCode.success, "Role created successfully", newRole)
    } catch (error) {
        return handleErrorResponse(res, statusCode.error, "Server Error")
    }
}