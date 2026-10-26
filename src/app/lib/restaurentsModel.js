// const {default: mongoose} = require("mongoose");
// const restaurentModel = new mongoose.Schema({
//     name:String
    
// });
// export const restaurantSchema = mongoose.models.restaurants
// || mongoose.model("restaurants", restaurentModel);



import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
  restaurantName: String,
  email: String,
  password: String,
  restaurantAddress: String,
  restaurantPhoneNumber: String,
});

export const restaurantSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);