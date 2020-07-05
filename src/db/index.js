/**
 *  Responsável por abrir a conexão com o MongoDb
 */
require('dotenv/config');

const mongoose = require('mongoose');

    mongoose.connect(process.env.DB_URI,{useMongoClient:true}).then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.log("Database Connection Failed " + err );
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;