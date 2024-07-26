import { Schema,model } from "mongoose";

const TransctionSchema = new Schema (
    {

        Title:{
            type:String,
            required: true,
        },

        Amount:{
            type:Number,
            required: true,
        },

        Transction:{
            type: String,
            enum:["debit","credit"],    
        },

        Category:{
            type:String,
           default:"others",
        },

        user:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }

    },
    {
        timestamps:true
    }
)

const Transiction = model("Transiction", TransctionSchema);

export default Transiction