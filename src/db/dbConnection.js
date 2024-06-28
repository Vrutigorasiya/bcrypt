const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb+srv://vrutigorasiya1006:EPExlHfrklF29pPl@netflix.ikvws2e.mongodb.net/bcrypt")
    .then((data) => {
        if(data){
            console.log("Database connected successfullyyyyy.........");
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;