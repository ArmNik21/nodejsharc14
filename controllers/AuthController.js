const { UserModel } = require("../models/UserModel");
const bcrypt=require(`bcryptjs`)

class AuthController{

    registerView(req,res){
        let message=""
        res.render(`register`,{message})
    }

   async  registerNewUser(req,res){
    try{
       //coding with algoritm
       let hashPassword=bcrypt.hashSync(req.body.password);
       let newUser=new UserModel({
          
           email:req.body.email,
           password:hashPassword,
       })
       let savedUser=await newUser.save();
        res.redirect(`/auth/register`)
     }catch(err){
        res.render(`register`,{message:err.message})
     }     
    }


    
}

module.exports=new AuthController()