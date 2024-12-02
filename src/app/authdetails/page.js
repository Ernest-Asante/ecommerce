"use client"
import React, {useState,useEffect} from 'react'
import AuthdetailsAppBar from '../appbar_authdetails/page'
import MyContext from '@/context/mycontext';
import { useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import {ToastContainer, toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function AuthDetails() {

  
 const {user, setUser} = useContext(MyContext) 


 const [name, setName] = useState(''); 
 const [email, setEmail] = useState('');
 const [number, setNumber] = useState('');
 const [userId, setUserId] = useState('');


 useEffect(() =>{
  if (user) {
    setEmail(user?.email)
    setName(user?.displayName) 
    setUserId(user?.uid) 
  }
 }, [user])


 const handleSubmit =
 async(e) => {
   e.preventDefault();
   try {
    const ref = doc(db, "profile", `${user?.uid}`)
      await setDoc(ref, {
        name: name,
        email:email,
        mobile: number,
        userId: userId
      });
      localStorage.setItem('userEmail', email)
    //  alert('profile updated') 
      toast.success('registration successful', {position:"top-right", autoClose: 3000}) 
    
   } catch (error) {  
    console.log('error occured', error)
    toast.error('an error occured. Please try again') 
   } 
 }

  return (
    <div>
      <ToastContainer/>
      <AuthdetailsAppBar/>


<div style={{marginTop:"20vh"}}></div>
<div style={{ marginLeft:"5px"}}>
  

 

  <div style={{marginTop:"10px"}}>
      <p style={{padding:0, margin:0, fontSize:"20px"}}>Name:</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{width:"90vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
    />

  </div>

  <div style={{marginTop:"10px"}}>
      <p style={{padding:0, margin:0, fontSize:"20px"}}>Email:</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{width:"90vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
    />

  </div>

<div style={{marginTop:"10px"}}>
<p style={{padding:0, margin:0, fontSize:"20px"}}>Phone number:</p>
<input
  type="number"
  placeholder="Enter your phone number"
  value={number}
  onChange={(e) => setNumber(e.target.value)}
  style={{width:"90vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
/>

</div>



  <button style={{border:"1px solid green", backgroundColor:"white", color:"green", width:"92vw", height:"40px", marginTop:"32px", borderRadius:"5px", fontSize:"20px"}} onClick={handleSubmit}> SUBMIT</button>

  
</div>
</div>
  )
}

export default AuthDetails
