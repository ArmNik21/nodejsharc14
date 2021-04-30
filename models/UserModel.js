const {Schema,model}=require(`mongoose`);

let UserSchama=new Schema({
   
    email:{
        type:String,
       
    },
    password:{
        type:String,
    }
})

let UserModel=model(`user`,UserSchama);

module.exports={
    UserModel
}