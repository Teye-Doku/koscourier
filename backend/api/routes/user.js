const express = require('express');
const userController = require('../controllers/user');
const userAuth = require('../middleware/authmiddleware')


const router = express.Router();
router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);
router.get('/',userController.getUsers);
router.get('/profile',userController.getUserProfile);
router.put('/profile',userController.updateUserProfile);
router.put('/:id',userController.updateUser);
router.get('/:id',userController.getUser);
router.delete('/:id',userController.deleteUser);
module.exports = router;