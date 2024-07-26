import { Schema,model } from "mongoose";

const UserSchema = new Schema (
    {

        ProfilePitcher:{
            type: String,
            required: true,
        },

        FullName:{
            type: String,
            required: true,
        },

        Email:{
            type: String,
            required: true,
            unique:true
        },

        Password:{
            type: String,
            required: true,
        },

        DOB:{
            type: Date,
            required: true,
        },


    },
    {
        timestamps:true
    }
);

const User = model("User", UserSchema)

export default User