"use client"
import React from 'react'
import { useContext, useState } from 'react';
import LoginAppBar from '../appbar_login/page'
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import {auth,db, provider} from "@/firebase-config"
import { doc, getDoc } from 'firebase/firestore';
import MyContext from '@/context/mycontext';
import { useRouter } from 'next/navigation';
import {  Modal,Box ,styled, } from '@mui/material';
import {ToastContainer, toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const StyledModal=styled(Modal)({  
  display:"flex",  
  alignItems:"center",
  justifyContent:"center"

})




function CartLogin() {

 const {user, setUser} = useContext(MyContext) 
 
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState(''); 

 const [resetEmail, setResetEmail] = useState('');

 const [open,setOpen]=useState(false);

 const openReset = () =>{
    setOpen(true) 
 }


 const router = useRouter();  
 

  const handleGoogleSignIn = 
  async () => {
    try{
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user)
      console.log(user)
      toast.success('login successful', {position:"top-right", autoClose: 3000}) 
      router.push('/transition')
     
    } catch(error){  
      console.error(error)
      toast.error('Signin failed. Please try again') 
    }
};



  const handleLogin = async (e) => {
    e.preventDefault();
  

    try {
      // Login the user using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('login successful', {position:"top-right", autoClose: 3000}) 
    
      router.push('/shop')

    } catch (err) {
        toast.error('login failed. Please try again') 
      console.log(err.message)
    } 
  }; 
 


  const handlePasswordReset = async () => {
    try {
      // Reference to the document using the email as the ID
      const userDocRef = doc(db, 'authusers', resetEmail);   
      const userDocSnap = await getDoc(userDocRef);   

      // Check if the document exists and if verified is true 
      if (userDocSnap.exists() && userDocSnap.data().verified === true) { 
        // Send the password reset email
        await sendPasswordResetEmail(auth, resetEmail);   
        console.log('Password reset email sent successfully.');  
        toast.success('reset email sent', {position:"top-right", autoClose: 3000}) 
       // setMessage('Password reset email sent successfully.');
      } else {
        console.log('User not found or not verified.');
        toast.error('email not found') 
       // setMessage('User not found or not ve rified.');
      }
    } catch (error) {
      console.error('Error sending password reset email:', error);
      toast.error('an error occured...try again') 
     // setMessage('Error sending password reset email.');
    }
  };



  return (
    <div> 
      <ToastContainer/>
      <LoginAppBar/>
      <div style={{marginTop:"15vh"}}></div> 
      <div style={{ marginLeft:"5px"}}>
        

       

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
            <p style={{padding:0, margin:0, fontSize:"20px"}}>Password:</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{width:"90vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
          />

        </div>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <p>FORGOTTEN PASSWORD?</p>
          <p style={{marginRight:"10px", color:"green"}} onClick={openReset}><u>RESET</u></p>

        </div> 



        <button style={{border:"1px solid green", backgroundColor:"white", color:"green", width:"92vw", height:"40px", marginTop:"32px", borderRadius:"5px", fontSize:"20px"}} onClick={handleLogin}> LOGIN</button>

         <h3 style={{textAlign:"center", color:"green"}}>OR</h3>

         <button style={{ backgroundColor:"green", border:"none", color:"white", width:"92vw", height:"40px", marginTop:"18px", borderRadius:"5px", fontSize:"20px"}} onClick={handleGoogleSignIn}>SIGNIN WITH GOOGLE </button>


      </div>



      <div>
    <StyledModal
        open={open} 
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box  bgcolor="white" p={2} borderRadius={5} height={350} sx={{width:"85vw"}}> 
       
       <div>
         <h2>WE WILL SEND YOU A PASSWORD RESET LINK TO YOUR EMAIL</h2>
         <h3>ENTER YOUR EMAIL BELOW:</h3>  
       </div>


       <div style={{marginTop:"15px"}}> 
           
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              style={{width:"80vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
          />

        </div> 

        <button style={{ backgroundColor:"green", border:"none", color:"white", width:"80vw", height:"45px", marginTop:"20px", borderRadius:"5px", fontSize:"20px"}} onClick={handlePasswordReset}>SEND RESET LINK</button>

       </Box>   
      </StyledModal>
     
    </div>

    </div>
  )
}

export default CartLogin
