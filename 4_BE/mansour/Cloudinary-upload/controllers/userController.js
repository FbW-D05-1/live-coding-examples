
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const Image = require('../models/imageModel');
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

// get loggedin user
const loadUser = async(req,res)=>{
    try {
       
        const user = await User.findById(req.user.userId).select('-password -_id -__v');
        console.log("loading the user:",user);
        return res.json({user})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Server Error"});
        
    }

}
const register = async(req,res)=>{
    const { name, email , age, password} = req.body
    try {
    // check if user already exist 
    const userExists = await (await User.findOne({email}));
    if(userExists){
        return res.status(409).json({msg:"user already exists!"});
    }
    // create hash password using bcrypt:
    //const saltRound = await bcrypt.genSalt(10) // better practice
    //const saltRound = 10; // this works too
    //const hashedPass = await bcrypt.hash(password,saltRound);
    //const user = new User({name , email,age ,password:hashedPass});
     
    // or create hash password using mongoose method   
    
    const user = new User({name , email,age ,password});
    const hashedPass = await user.hashPassword(password,10);
    user.password = hashedPass;
    
    
    await user.save();
    return res.status(201).json({msg :"User created Successfully!" ,user})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg :"Server Error!"})
    }

}
const login = async(req,res)=>{
    const { email,password } = req.body;
    try {
        const userExists = await User.findOne({email});
        if(!userExists){
         return   res.status(404).json({msg:"email not found!"})
        }
        const matched  = await userExists.comparePassword(password,userExists.password);
        if(!matched){
            return   res.status(500).json({msg:"password incorrect!"})
        }
        // token erstellen und schicken mit cookie oder mit response
        const payload = { userId:userExists.id}
        const secretKey = process.env.SECRETKEY;
        const token = jwt.sign(payload,secretKey,{expiresIn:'1h'});
        console.log(token); 
        //send token with cookie
        res.cookie("token",token,{
            httOnly:true,
            SameSite:'Lax',
            maxAge: 24 * 60 * 60 * 1000 // one day
        })
        // in frontend redirect to dashboard
        // in frontend dashboard wird token gepruft und user data von backend
        const newUser = {
            email:userExists.email,
            name:userExists.name,
            age:userExists.age
        }
        res.json({msg:"you are logged in!!", user:newUser})

        
    } catch (error) {
        
    }

}

const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find();
        res.json({allUsers});
        
    } catch (error) {
        res.status(500).json({message:"server error" ,error});

    }
   

}

// get user with id as params 
const getUser = async(req,res,next)=>{
    try {
        const {id}  = req.params;
    const user = await User.findById(id);
    res.json({user});
        
    } catch (error) {
        next(error)
        //res.status(500).json({message:"server error" ,error});
        
    }


}

// upload images 

const upload =  async (req, res) => {
   
    const { image,name } = req.body
  
    try {
      const result = await cloudinary.uploader.upload(image)
      console.log(result);
      console.log(req.user.userId);
      const newImage = new Image({
          title:name,
          image:result.secure_url ,
          added_by:req.user.userId
      });
      await newImage.save()
      res.json({
        msg:"image uploadded successfully",url:newImage.image
      });
    }
    catch(err) {
      console.log(err)
      res.status(400).json({
        error: err.message
      })
    }
  
   
}

const logout = (req,res)=>{
    res.clearCookie("token");
    res.json({ msg:"logged out successfully!"});

}
const dashboard = async (req,res)=>{
   try {
    const userId = req.user.userId;
    const userImages = await Image.find({added_by:userId});
    return res.json({msg:'images array' , userImages});
       
   } catch (error) {
       console.log(error);
       return   res.status(500).json({msg:'server error' });

   }
} 

module.exports = { register,login, getAllUsers,getUser,upload,loadUser,logout,dashboard}