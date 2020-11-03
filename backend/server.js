const express = require('express');
const cors = require('cors');
const connectDatabase = require('./api/config')
const PORT = process.env.PORT || 8000;
const userRoutes = require('./api/routes/user');
const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/order');

const app = express();

//connectDatabase()
app.use(express.json());
app.use(cors());

//routes
app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.use('/orders',orderRoutes)


//handling error gracefully
app.use((req,res,next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});
app.use((error,req,res,next) => {
 res.status(error.status || 500).json({
      error:{
          message:error.message
      }
 });
})

app.listen(PORT,()=> {console.log(`the server is running at port ${PORT}`)})