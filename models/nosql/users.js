const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name: {
            type:String
        },
        age:{
            type: Number
        },
        email:{
            type: String,
            unique: true
        },
        parssword:{
            type: String
        },
        role:{
            type:["user","admin"],
            default: "users"
        },
    },
    {
        timestamps:true, // TODO: createdAt, updatedAt
        versionKey:false
    }
);
module.exports = mongoose.model("users", UserSchema)