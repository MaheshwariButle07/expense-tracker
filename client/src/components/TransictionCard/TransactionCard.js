import React from 'react';
import "./TransactionCard.css"
import deleteImg from "./delete.png"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



function TransactionCard({_id,Title,Amount,Category,Transction,createdAt,loadTransiction}) {


  const deleteTransiction = async()=>{

    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/deleteTransiction/${_id}`)

    toast.success(response.data.message)

    loadTransiction();

  }
    
  
  return (

   <div className='transictin-card-container'>
     <div className="tranciction-card-main-container">
      <div className="tranciction-card-info">
        <div>
          <h2>{Title}</h2>
          <p>{new Date(createdAt).toLocaleString()}</p>
          
        </div>
      </div>

    <div className='del-div'>
    <div className="tranciction-card" >
        <h1 style={{color:Transction === 'Credit' ? "green" : "red"}}>
          {Transction === 'Credit' ? "+" :"- "}
          {Amount}</h1>
          <p>{Category}</p>
          </div>


  
       <div>
        <img 
      src={deleteImg} 
      alt="delete-img"
      className='delete-img'
      onClick={deleteTransiction}  />
       </div>
    </div>
      
      <Toaster/>
    </div>
   </div>
     
  )
}


export default TransactionCard