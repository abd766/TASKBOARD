const mongoose = require('mongoose');
require("dotenv").config();

mongoose.set('strictQuery', true);
const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to Mongo Successfully')
        })
        .catch(console.error())
}

module.exports = connectToMongo;
