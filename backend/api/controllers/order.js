const asyncHandler = require('express-async-handler');

exports.allOrders = asyncHandler((req,res) => {
    res.json({
        message:'all orders'
    })
})