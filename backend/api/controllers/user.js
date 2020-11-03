const User  = require('../models/user');
const generateToken = require('../../utils/generateToken') 
const bcrypt = require('bcrypt');


exports.registerUser =  (req,res) => {
    const {name,email,password} = req.body;
    User.find({email})
    .exec()
    .then(user => {
        if(user.length >=1){
            return res.status(400).json({message:'user alredy exits'})
        }else {
            bcrypt.hash(password,10,(err,hashed) => {
               if(err){
                   return res.status(400).json({message:'internal error'})
               }
               if(hashed) {
                  const user = User.create({
                      name:name,
                      email:email,
                      password:hashed
                  })
                  user.save()
                  .then(user => {
                      return res.status(200).json({
                          _id:user._id,
                          name:user.name,
                          email:user.email,
                          isAdmin:user.isAdmin,
                          token:generateToken(user._id)
                      })
                  })
                  .catch(err => {
                       return res.status(400).json({message:err.message});
                  })
               }
            });
        }
    })
    .catch(err => {
       res.status(400).json({message:err.message})
    })
 }


 exports.loginUser = (req,res) => {
    const {email,password} = req.body;
    User.find({email})
    .exec()
    .then(user => {
        if(user.length <=0) {
            return res.status(400).json({
                message:'user does exists'
            })
        }else {
            bcrypt.compare(password,user[0].password,(err,hashed) => {
                if(err) {
                    return res.status(400).json({message:'internal error'})
                }
                if(hashed) {
                  return res.status(200).json({
                     _id:user._id,
                     name:user.name,
                     email:user.email,
                     isAdmin:user.isAdmin,
                     token:generateToken(user._id)
                  })
                }
            });
        }
    })
    .catch(err => {
        res.status(500).json({message:err.message})
    }) 
 }


 exports.getUserProfile = (req,res) => {
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

 exports.updateUserProfile = (req,res) => {
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
                 _id:updatedUser._id,
                 name:updatedUser.name,
                 email:updatedUser.email,
                 isAdmin:updatedUser.isAdmin,
                 token:generateToken(updatedUser._id)
             })

          })
          .catch(err => {
               res.status(500).json({
                   message:err.message
               })
          })
 }

 exports.getUsers = (req,res) => {
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

 exports.updateUser = (req,res) => {
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
 exports.deleteUser = (req,res) => {
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

 exports.getUser = (req,res) => {
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