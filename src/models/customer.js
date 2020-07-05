/**
 *  Cria o modelo de dados que a collection deve conter
 */
const mongoose = require('../db');

const CustomerSchema = new mongoose.Schema({
    budget:{type:String},
    pictures:{type:Array},
    age:{type:Number},
    name:{type:Object},
    company:{type:String},
    email:{type:String},
    phone:{type:String},
    address:{type:String},
    about:{type:String},
    registered:{type:String},
    latitude:{type:String},
    longitude:{type:String},
    contactTimeline:{type:Array},
    channel:{type:String}    
});

const Customer = mongoose.model(process.env.COLLECTION_NAME,CustomerSchema);

module.exports = Customer;