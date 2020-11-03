const express = require('express');
const userController = require('../controllers/user');
const userAuth = require('../middleware/authmiddleware')


const router = express.Router();
router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);
router.get('/',userController.getUsers);
router.get('/profile',userAuth.protect,userController.getUserProfile);
router.put('/profile',userAuth.protect,userController.updateUserProfile);
router.put('/:id',userAuth.protect,userAuth.admin,userController.updateUser);
router.get('/:id',userAuth.protect,userAuth.admin,userController.getUser);
router.delete('/:id',userAuth.protect,userAuth.admin,userController.deleteUser);
module.exports = router;