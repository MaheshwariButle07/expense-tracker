import React, { useState , useEffect} from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast , {Toaster} from "react-hot-toast";

function Signup() {

  const [User, setUser] = useState({
    ProfilePitcher:'',
    FullName:'',
    Email: '',
    Password: '',
    DOB: '',
  });

  
  

  const Signup = async () => {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`,
        {
          ProfilePitcher: User.ProfilePitcher,
          FullName: User.FullName,
          Email: User.Email,
          Password: User.Password,
          DOB: User.DOB,
        }
      );

      console.log(response.data.message)

      if (response.data.success) {
        toast.success(response.data.message)

      
            setUser({
              ProfilePitcher: "",
              FullName: "",
              Email: "",
              Password: "",
              DOB: "",
            })
          }
           else {
            toast.error(response.data.message);
          }
        };
      

        
  
    

  return (
    <>
      <div className="form-container">
  
        <div className="container">

        <div className="form-heading">
          <h1>Signup Form</h1>
        </div>

          <div className="input-container">
            <label>Profile Pitcher : </label>
            <input
              type="file"
              id="input1"
              value={User.ProfilePitcher}
              onChange={(e) => setUser({...User,
                ProfilePitcher : e.target.value
              })}
              
            />
          </div>

          <div className="input-container">
            <label>FullName : </label>
            <input
              type="text"
              placeholder="write fullname here....."
              id="input2"
              value={User.FullName}
              onChange={(e) => setUser({...User,
                FullName : e.target.value
              })}
            />
          </div>

          <div className="input-container">
            <label>Email : </label>
            <input
              type="email"
              placeholder="write email here....."
              id="input3"
              value={User.Email}
              onChange={(e) => setUser({...User,
                Email : e.target.value
              })}

            />
          </div>

          <div className="input-container">
            <label>Password : </label>
            <input
              type="password"
              placeholder="write password here....."
              id="input4"
              value={User.Password}
              onChange={(e) => setUser({...User,
                Password : e.target.value
              })}

            />
          </div>

          <div className="input-container">
            <label>DOB : </label>
            <input
              type="date"
              placeholder="write dob here....."
              id="input5"
              value={User.DOB}
              onChange={(e) => setUser({...User,
                DOB : e.target.value
              })}

            />
          </div>

          <button 
          type="button" 
          className="form-btn"
          onClick={Signup}
          >Signup</button>

          <Link to="/login" className="login-link"> Already have an account? Click here to Login</Link>
        </div>
      </div>
     <Toaster/>
    </>
    
  );
}

export default Signup;
