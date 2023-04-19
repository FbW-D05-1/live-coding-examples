const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5
    },
    age:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    

});
// before save
UserSchema.pre('save', async(next)=>{
    console.log(' test for pre save');
    next()

});
UserSchema.post('save', async(doc,next)=>{
    console.log(' test for post save', doc);
    next()

});
UserSchema.methods.hashPassword = async (pass,saltRound)=>{
    return await bcrypt.hash(pass,saltRound);
}
UserSchema.methods.comparePassword = async(pass, userPass)=>{
    return await bcrypt.compare(pass,userPass); // true or false
}

const User = mongoose.model("User",UserSchema);
module.exports = User;