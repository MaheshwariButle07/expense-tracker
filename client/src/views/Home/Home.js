
import React, { useEffect, useState } from "react";
import "./Home.css";
import Signup from "../Signup/Signup";
import addImage from "./add.png";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import TransactionCard from "../../components/TransictionCard/TransactionCard";

function Home() {
  // Amount
  // Transction
  // Category
  // user

  const [User, setUser] = useState("");
  const [Transction, setTransiction] = useState([]);
  const [Income, setIncome] = useState(0);
  const [Expense, setExpense] = useState(0);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
      
    } 
    if(!currentUser) {
      window.location.href = "/login";
    }

   
  }, []);



  const loadTransiction = async () => {
    if (!User._id) {
      return;
    }
    toast.loading("Loading transiction please wait..... ");

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/getTransiction?userId=${User._id}`

      
    );

    const allTransiction = response.data.data;

    console.log(response)
    toast.dismiss();

    setTransiction(allTransiction);

  };

  

  useEffect(() => {
    loadTransiction(); 
  }, [User]);

  useEffect(() => {
    let Income = 0
    let Expense = 0

    Transction.forEach((transaction)=>{
      if(transaction.Transction === 'Credit'){
        Income += transaction.Amount 
        console.log(Income)
      }

      else{ 
        Expense += transaction.Amount
      }
    })

    setIncome(Income);
    setExpense(Expense);

    
  }, [Transction]);


  return (
    <div>
      <h1 className="Heading">Keep Track of your daily expenses</h1>

      <p className="logout-btn" onClick={()=>{
        localStorage.clear()
        toast.success("Logged out successfully")

        setTimeout(()=>{
          window.location.href="/login"
        },3000)

      }}>Logout</p>

      <div className="transiction-container">

      <div>
           <img
            src={User.ProfilePitcher}
            className="transiction-card-user-img"
          /> 
           <p className="transiction-card-user-name">{User.FullName}</p> 
        </div> 

        
        <div className="info-container">
          <h2>Expense</h2>
          <p>- {Expense}</p>
        </div>

        <div className="info-container">
          <h2>Income</h2>
          <p>+ {Income}</p>
        </div>

        <div className="info-container">
          <h2>Total</h2>
          <p>= {Income-Expense}</p>
        </div>
      </div>

      

         {Transction.map((transaction) => {
          const { _id, Title, Amount, Category, Transction, createdAt } =
            transaction;
          
          return (
            <div className="transictin-all-card-container">
            <TransactionCard 
            key={_id}
            _id={_id}
            Title={Title}
            Amount={Amount}
            Category={Category}
            Transction={Transction}
            createdAt={createdAt}
            loadTransiction={loadTransiction}
            />
            </div>
           
          );
        })} 
    

      <Link to="/addTransiction">
        <img src={addImage} alt="add-transiction" className="add-transiction" />
      </Link>
    </div>
  );
}

export default Home;
