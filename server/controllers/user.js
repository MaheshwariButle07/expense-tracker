import User from "./../models/User.js"


const Signup =  async (req,res)=>{

    const {ProfilePitcher,FullName,Email,Password,DOB} =req.body

    const user = new User({
        ProfilePitcher,
        FullName,
        Email,
        Password,
        DOB: new Date(DOB)
    });

    try{
        const savedUser = await user.save()

        res.json({
            success:true,
            message:"You singedup Succesfully",
            data:savedUser
        })
    }

    catch(e){

        res.json({
            success:false,
            message: e.message,
            data:null
        })
    }
}

const Login  =  async (req,res)=>{

    const {Email,Password} = req.body

    const user = new User.findOne({
        Email:Email,
        Password:Password
    })

    if(user){

        return res.json({
            success:true,
            message:"User Find Succesfully",
            data:user
        })
    }

    else{
        return res.json({
            success:false,
            message:"User dosen't Match",
            data:null
        })
    }

} 

export {Signup, Login}