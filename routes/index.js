const express = require('express');
const router = express.Router();

// import all the routes 

const routes = [
    require('../routes/v1/admin/index'),
    // require('../routes/v1/superAdmin/index'),
    // require('../routes/v1/users/index'),
    
  ];
  
  // Export the routes array
  module.exports = routes;