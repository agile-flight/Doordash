/* 
This file defines the schemas to be used in the App

- Defines OperationSchema which has day, open and close attributes
- Defines ResterauntSchema which has name, distance, estimatedPickupTime, 
  address, operationHouse and dashPassEnabled atttributes
*/

//Require the Schema library
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



//RestaurantSchema is imported as "Restaurant"
module.exports = mongoose.model("Restaurant", RestaurantSchema);