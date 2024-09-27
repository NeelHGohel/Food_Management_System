const mongoose = require('mongoose');

const schma = mongoose.Schema({
    FoodID : Number,
    FoodName : String,
    FoodPrice : Number,
    FoodIMG : String
});

module.exports = mongoose.model("Food" , schma,"Food");