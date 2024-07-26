import Transiction from "./../models/Transaction.js"
import User from "../models/User.js";

const addTransiction = async(req, res) => {
      const { Title, Amount, Transction, Category, user } = req.body;
    
      const Transaction = new Transiction({
        Title,
        Amount,
        Transction,
        Category,
        user,
      });
    
      try{
    
        const saveTransction = await Transaction.save() 
    
        res.json({
            success: true,
            message: "transiction added successfully",
            data:saveTransction
          });
      }
    
      catch(e){
    
        res.json({
            success: false,
            message: e.message,
            data:null
          });
    
      }
     
};

const fetchTransiction = async(req, res)=>{

    const {userId} = req.query

    const user = await User.findById(userId)

    if(!user){

        res.json({
            success:false,
            message:"User Not Find",
            data:null
        })

        const userTransiction = Transiction.find({userId:userId}).sort({createdAt:-1});

        res.json({
            success:true,
            message:"User Find Succesfully",
            data:userTransiction
        })
    }

}; 

const deletTransiction = async(req,res)=>{

    const {id} = req.params;

    await Transiction.deleteOne({_id:id});

    res.json({
        success:true,
        message:"Transiction Deleted Succesfully",
        data:null
    })
}


export {addTransiction, fetchTransiction, deletTransiction}