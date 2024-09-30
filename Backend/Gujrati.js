const mongoose = require('mongoose');

const schma = mongoose.Schema({
    FoodID : Number,
    FoodName : String,
    FoodPrice : String,
    FoodIMG : String,
    FoodDescryption : String
});

module.exports = mongoose.model("gujrati" , schma,"gujrati");