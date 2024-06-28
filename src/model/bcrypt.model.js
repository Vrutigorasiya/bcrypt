const mongoose = require("mongoose")

const bcrypt_schema = mongoose.Schema(
    {
        bcrypt_name:{
            type:String,
            trim:true
        },
        bcrypt_password:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const bcrypt = mongoose.model("Bcrypt",bcrypt_schema)

module.exports = bcrypt