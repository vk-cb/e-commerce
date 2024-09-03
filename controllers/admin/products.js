const products = require('../../models/products/index');
const { handleErrorResponse, handleSuccessResponse } = require('../../utils/returnfunction');
const { statusCode } = require('../../utils/statusCodes');
exports.AddProduct = async(req, res)=>{
    const {title, price, description, quantity,image,category, subCategory} = req.body;
    if(!title || !price || !description || !quantity || !category){
        return handleErrorResponse(res, statusCode.badRequest, "Please fill all fields");
    }
    try {
        // console.log(req.admin.dataValues.id)
        const newProduct = {title, price, description, quantity, image, category, subCategory, adminId : req.admin.dataValues.id};
        // console.log(newProduct)
        const createdProduct = await products.create(newProduct);
        console.log(createdProduct)
        return handleSuccessResponse(res, statusCode.success, "New product added successfully", newProduct)
        
    } catch (error) {
        return handleErrorResponse(res, statusCode.error, "Server Error")
    }
}