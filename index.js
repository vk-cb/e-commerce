const express =require('express')
const cors = require('cors')
const routes = require('./routes')
const sequelize = require('./config/database')
require('dotenv').config()
const adminAuth = require('./models/admin/auth.js')
const products = require('./models/products/index.js')
const app = express()
app.use(express.json())
const port = process.env.PORT
routes.forEach((route)=>{
    app.use(route);
})



sequelize.sync().then(()=> {
    app.listen(port , ()=>{
        console.log(`Server is running on port http://localhost${port}`)
    })
})