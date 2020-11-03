const User  = require('../models/user');
const generateToken = require('../../utils/generateToken') 
const bcrypt = require('bcrypt');


exports.registerUser =  (req,res,next) => {
    
    User.find({email:req.body.email})
    .exec()
    .then(user => {
        if(user.length >=1){
            return res.status(409).json({message:'user alredy exits'})
        }else {
            bcrypt.hash(req.body.password,10,(err,hash) => {
               if(err){
                   return res.status(500).json({message:'internal error'})
               }
               if(hash) {
                 const user = new User({
                   name:req.body.name,
                   email:req.body.email,
                   password:hash  
                 })
                  
                  user.save().then(user => {
                      return res.status(200).json({
                          _id:user._id,
                          name:user.name,
                          email:user.email,
                          isAdmin:user.isAdmin,
                          
                      })
                  })
                  .catch(err => {
                       return res.status(500).json({message:err.message});
                  })
               }
            });
        }
    })
    .catch(err => {
       res.status(500).json({message:err.message})
    })
 }


 exports.loginUser = (req,res,next) => {

    User.find({email:req.body.email})
    .exec()
    .then(user => {
        if(user.length <1) {
            return res.status(401).json({
                message:'user does not exists'
            })
        }else {
            bcrypt.compare(req.body.password,user[0].password,(err,result) => {
                if(err) {
                    return res.status(500).json({message:'email or password is wrong'})
                }
                if(result) {
                  return res.status(200).json({
                     _id:user[0]._id,
                     name:user[0].name,
                     email:user[0].email,
                     isAdmin:user[0].isAdmin,
                     token:generateToken(user[0]._id)
                  })
                }
            });
        }
    })
    .catch(err => {
        res.status(500).json({message:err.message})
    }) 
 }


 exports.getUserProfile = (req,res,next) => {
     const id = req.user._id;
     User.findById(id)
         .exec()
         .then(user => {
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
            })
         })
         .catch(err => {
             res.status(500).json({
                 message:err.message
             })
         })
 }

 exports.updateUserProfile = (req,res,next) => {
     const {name,email,password} = req.body;
      const id = req.user._id;
      User.findById(id)
          .exec()
          .then(user => {
             if(user) {
                 user.name = name || user.name,
                 user.email = email || user.email
                 if(password) user.password = password;
             }
             const updatedUser =  user.save();
             res.status(200).json({
                 _id:updatedUser[0]._id,
                 name:updatedUser[0].name,
                 email:updatedUser[0].email,
                 isAdmin:updatedUser[0].isAdmin,
                 token:generateToken(updatedUser._id)
             })

          })
          .catch(err => {
               res.status(500).json({
                   message:err.message
               })
          })
 }

 exports.getUsers = (req,res,next) => {
     User.find({})
     .exec()
     .then(users => {
        res.status(200).json(users)
     })
     .catch(err => {
          res.status(500).json({
              message:err.message
          })
     })
 }

 exports.updateUser = (req,res,next) => {
     const {name,email,isAdmin} = req.body;
     User.findById(req.params.id)
     .exec()
     .then(user => {
         if(user) {
             user.name = name,
             user.email = email,
             user.isAdmin = isAdmin
         }
        const updatedUser = user.save()
        res.status(200).json({
            _id:updatedUser._id,
            name:updatedUser.name,
            isAdmin:updatedUser.isAdmin
        })
     })
     .catch(err => {
         res.status(500).json({
             message:err.message
         })
     })

 }
 exports.deleteUser = (req,res,next) => {
     const id = req.params.id;
     User.findById(id)
         .then(user => {
            if(user) {
                user.remove();
            }
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password
            })
         })
         .catch(err => {
             res.status(500).json({
                 message:err.message
             })
         })
 }

 exports.getUser = (req,res,next) => {
     const id = req.params.id;
     User.findById(id)
        .then(user => {
           res.status(200).json({
             _id:user._id,
             name:user.name,
             email:user.email,
             isAdmin:user.isAdmin
           })
        })
        .catch(err => {
            res.status(500).json({
                message:err.message
            })
        })
 }