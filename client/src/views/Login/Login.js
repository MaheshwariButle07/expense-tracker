import React, { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import axios from "axios";
import toast , {Toaster} from "react-hot-toast";

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const Login = async()=>{
    const response = await axios.post(`http://localhost:5000/login`,{
      Email:email,
      Password:password
    })

    console.log(response.data)

    if(response.data.success){
      toast.success(response.data.message)

      localStorage.setItem('currentUser',JSON.stringify(response.data.data))

      toast.loading("Redirecting to dashboard")
      setTimeout(()=>{

        window.location.href="./"

      },3000)
    }
    else{
      toast.error(response.data.message)
    }
  }


  return (
    <div>
      <div className="form-container">
        <div className="container">
          <div className="form-heading">
            <h1>login Form</h1>
          </div>

          <div className="input-container">
            <label>Email : </label>
            <input
              type="email"
              placeholder="write email here....."
              id="input3"
              value={email.Email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>

          <div className="input-container">
            <label>Password : </label>
            <input
              type="password"
              placeholder="write password here....."
              id="input4"
              value={password.Password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>

          <button 
          type="button" 
          className="form-btn"
          onClick={Login}
          >Login</button>

          <Link to="/signup" className="login-link"> Don't have an account? Click here to Signup</Link>
<Toaster/>
        </div>
      </div>
    </div>
  );
}

export default Login;
