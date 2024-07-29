import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./AddNewTransiction.css";
import axios from "axios"

function AddNewTransiction() {
  const [User, setUser] = useState("");
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState(0);
  const [Transction, setTransction] = useState("Credit");
  const [Category, setCategory] = useState("Other");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      setUser(currentUser);
    }

    if (!currentUser) {
      window.location.href = "/login";
    }
  }, []);

  const addTransiction = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/addTransiction`, {
      Title,
      Amount,
      Transction,
      Category,
      user: User._id
    })

      toast.success(response.data.message);

      setTitle('');
      setAmount(0);
      setTransction("Credit");
      setCategory("other");


      setTimeout(() => {
        window.location.href = '/'
      }, 2000)

    }
  

  return (
    <div>
      <>
        <div className="form-container">
          <div className="container">
            <div className="form-heading">
              <h1>New Transiction{User.Full}</h1>
            </div>

            <div className="input-container">
              <label>Title</label>
              <input
                type="text"
                placeholder="write Title here....."
                id="input1"
                value={Title}
                onChange={(e) => setTitle(e.target.value
                )}
              />
            </div>

            <div className="input-container">
              <label>Amount : </label>
              <input
                type="text"
                placeholder="write Amount here....."
                id="input2"
                value={Amount}
                onChange={(e) => setAmount(e.target.value
                )}
              />
            </div>

            <div className="input-container">
              <label>Transiction : </label>
              <select className="input3"
              value={Transction}
              onChange={(e) => setTransction(e.target.value)}>
                <option value="Credit">Income</option>
                <option value="Debit">Expense</option>
              </select>
            </div>

            <div className="input-container">
              <label>Category : </label>
              <select
                className="input4"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              >
                 <option value="other">other</option>
                <option value="food">food</option>
                <option value="rent">rent</option>
                <option value="utilities">utilities</option>
                <option value="transportation">transportation</option>
                <option value="entertainment">entertainment</option>
                <option value="clothing">clothing</option>
                <option value="health">health</option>
                <option value="salary">salary</option>
                <option value="learning">learning</option>
              </select>
            </div>

            <button type="button" className="form-btn" onClick={addTransiction}>
              Add Teansiction
            </button>
          </div>
        </div>
        <Toaster />
      </>
    </div>
  );
}


export default AddNewTransiction;
