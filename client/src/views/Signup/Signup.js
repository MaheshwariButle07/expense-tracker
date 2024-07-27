import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {

  const [user, setUser] = useState({
    ProfilePitcher: "",
    FullName: "",
    Email: "",
    Password: "",
    DOB: ""
  });

  const Signup = async()=>{

    const response = await axios.post()

  }








  return (
    <>
      <div className="form-container">
        <div className="container">
          <div className="form-heading">
            <h1>Signup Form</h1>
          </div>

          <div className="input-container">
            <label for="input1">Profile Pitcher : </label>
            <input type="file" id="input1" />
          </div>

          <div className="input-container">
            <label for="input2">FullName : </label>
            <input
              type="text"
              placeholder="write fullname here....."
              id="input2"
            />
          </div>

          <div className="input-container">
            <label for="input3">Email : </label>
            <input
              type="text"
              placeholder="write email here....."
              id="input3"
            />
          </div>

          <div className="input-container">
            <label for="input4">Password : </label>
            <input
              type="text"
              placeholder="write password here....."
              id="input4"
            />
          </div>

          <div className="input-container">
            <label for="input5">DOB : </label>
            <input type="text" placeholder="write dob here....." id="input5" />
          </div>

          <button type="button" className="form-btn">
            Signup
          </button>

          <Link to="/login" className="login-link">
            {" "}
            Already have an account? Click here to Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
