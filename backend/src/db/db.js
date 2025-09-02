const mongoose= require('mongoose');


function connectDB(){
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log("Database connection error:", err)
    })
}

module.exports= connectDB;