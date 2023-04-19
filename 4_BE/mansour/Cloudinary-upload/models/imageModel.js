
const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
  title: { type: String, required: true, minLength: 4 },  
  image : { type: String},
  added_by : { type : mongoose.Schema.Types.ObjectId , ref : 'User'}
});
const Image = mongoose.model("Image",imageSchema);
module.exports = Image;
