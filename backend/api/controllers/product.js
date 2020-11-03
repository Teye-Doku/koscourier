const asyncHandler = require('express-async-handler');

exports.allProducts = asyncHandler((req,res) => {
    res.json({
        message:'all products'
    })
})