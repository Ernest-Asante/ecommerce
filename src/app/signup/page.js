"use client"
import { useContext, useState, useEffect, useRef } from 'react';
import SignupCartAppBar from '../appbar_signup/page'
import { signInWithPopup} from 'firebase/auth';
import {auth, provider} from "@/firebase-config";
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

function CartSignup() {

  const {user, setUser} = useContext(MyContext)
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); 
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   const [open,setOpen]=useState(false);

   const [otp, setOtp] = useState(["", "", "", ""]); 
   const [timeOut, setTimeOut] = useState(false);
   const [timeLeft, setTimeLeft] = useState(600);
   const otpRefs = useRef([]);

  const router = useRouter(); 


    useEffect(() => { 
    // Countdown timer logic 
    if (timeLeft === 0) { 
      setTimeOut(true)
    };

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeLeft,timeOut]); 

  const handleInput = (e, index) => {
    const text = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    console.log(otp)

    // Move to next input
    if (text && index < 3) {
      otpRefs.current[index + 1].focus();
    }
  };


  const handleGoogleSignIn = 
  async () => {
    try{
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user)
      console.log(user)
      toast.success('Signin successful...', {position:"top-right", autoClose: 3000}) 
      router.push('/transition')
    
    } catch(error){ 
      toast.error('an error occured... try again')  
     
      console.error(error) 
    } 
};   


const sendEmail = async () => {  
  setLoading(true); 
  setError(null); 

  try {
      const response = await fetch('/api/send-email', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email:email}),
      });

      const data = await response.json();
      if (response.ok) {
          console.log('success', data.message)
          setTimeLeft(600)
          toast.success('otp email sent...', {position:"top-right", autoClose: 3000}) 
          setOpen(true)
         
         // alert('otp sent')
      } else {
        console.log('error', data.message)
        toast.error('an error occured...try again') 
       // alert('error', data.message)
      }

  } catch (err) {
    //  setError(err.message);
      console.log('fore-error', err)
       // alert('fore-error', data.message)
       toast.error('an error occured...try again') 
  } finally {
      setLoading(false);
  }
};



const resendEmail = async () => { 
  setLoading(true);
  setError(null);

  try {
      const response = await fetch('/api/resend-otp', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email:email}),
      });

      const data = await response.json();
      if (response.ok) {
          console.log('success', data.message)
         // setOpen(true)
         // alert('otp sent')
         toast.success('otp email sent...', {position:"top-right", autoClose: 3000}) 
          setTimeLeft(600)
          setTimeOut(false)
      } else {
        console.log('error', data.message)  
       // alert('error', data.message)
       toast.error('an error occured...try again') 
      }

  } catch (err) {
    //  setError(err.message);
      console.log('resend-error', err)   
       /// alert('resend-error', data.message) 
       toast.error('an error occured...try again') 
  } finally {
      setLoading(false);
  }
};




 // Function to combine OTP and send it to the server
 const submitOtp = async () => {
  // Combine OTP array into one string
  const combinedOtp = otp.join('');

  // Check if all OTP fields are filled
  if (combinedOtp.length !== 4) {
   // alert('Please fill all OTP fields');
    toast.error('Please  fill in all fields') 
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const response = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp: combinedOtp, email: email, name: name, phone: number, password: password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle success (e.g., navigate, show success message, etc.)
     // alert('OTP verified successfully');
     localStorage.setItem('userEmail', email)
      toast.success('verification successful...', {position:"top-right", autoClose: 3000}) 
      setOpen(false)
      router.push('/shop')
    } else {
      // Handle error from server
      setError(data.message);
    //  alert(`Error: ${data.message}`);
    toast.error('an error occured...try again') 
    }
  } catch (err) {
    // Handle fetch error
    setError(err.message);
   // alert(`Error: ${err.message}`);
   toast.error('an error occured...try again') 
  } finally {
    setLoading(false);
  }
};



  return (
    <>
    <div>
    <ToastContainer/>
      <SignupCartAppBar/>
      <div style={{marginTop:"70px"}}></div> 
      <div style={{ marginLeft:"5px"}}>
        <div>
            <p style={{padding:0, margin:0, fontSize:"20px"}}>Name:</p>
            <input
              type="email"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{width:"90vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
          />

        </div>

        <div style={{marginTop:"10px", fontSize:"20px"}}>
            <p style={{padding:0, margin:0}}>Telephone:</p>
            <input
              type="number"
              placeholder="Enter your number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
            <p style={{padding:0, margin:0, fontSize:"20px"}}>Password:</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{width:"90vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
          />

        </div>

        <div style={{marginTop:"10px"}}>
            <p style={{padding:0, margin:0, fontSize:"20px"}}> Confirm Password:</p>
            <input
              type="password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{width:"90vw", border:"1px solid green", height:"40px",marginTop:"10px", borderRadius:"5px"}}
          />

        </div>

        <button style={{border:"1px solid green", backgroundColor:"white", color:"green", width:"92vw", height:"40px", marginTop:"25px", borderRadius:"5px", fontSize:"20px"}} onClick={sendEmail}> REGISTER</button>

         <h3 style={{textAlign:"center", color:"green"}}>OR</h3>

         <button style={{ backgroundColor:"green", border:"none", color:"white", width:"92vw", height:"40px", marginTop:"25px", borderRadius:"5px", fontSize:"20px"}} onClick={handleGoogleSignIn}>SIGNIN WITH GOOGLE </button>

      </div> 
    </div> 

       
        <div>
    <StyledModal
        open={open} 
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box  bgcolor="white" p={2} borderRadius={5} height={400} sx={{width:"80vw"}}> 
       
       <div>
         <h2>WE HAVE SEND AN OTP TO YOUR EMAIL: <br/> {email}</h2>
         <h3>ENTER IT BELOW</h3>
       </div>

       <div style={{ flexDirection: 'row', justifyContent: 'space-evenly',padding: 3}}> 
      {otp.map((digit, index) => (
        <input
          key={index}
          //style 
          style={{  width: 50,
        height: 40,
        borderBottomWidth: 2,
        borderColor: 'gray',
        borderWidth: 1,   
        borderRadius: 5,
        fontSize: "20px",
        backgroundColor: '#f2f2f2' ,
        alignItems:"center",
        justifyContent:"center",
        margin:"5px",
        border:"1px solid green",
       
        textAlign: 'center',}} 

        
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleInput(text, index)}
          value={digit}
            onChange={(e) => handleInput(e, index)}
            ref={(input) => (otpRefs.current[index] = input)}
        />
      ))}  
    </div> 


        {timeOut?(
        
          
     <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"20px", alignItems:"center"}}>
       <p style={{marginTop:"30px"}}><strong>Did Not Received OTP?</strong> </p>
       <button style={{width:"30vw", height:"40px", backgroundColor:"green",border:"none", color:"white", borderRadius:"10px", marginLeft:"5vw", fontSize:"20px", marginTop:"15px"}} onClick={resendEmail}> RESEND</button> 
     </div>
   
      ):(
      
        <div >
        <h2>{`OTP expires in: ${timeLeft}s`}</h2>
        <button style={{width:"70vw", height:"40px", backgroundColor:"green",border:"none", color:"white", borderRadius:"10px", marginLeft:"5vw", fontSize:"20px", marginTop:"20px"}} onClick={submitOtp}> SUBMIT</button> 
       </div> 


    )}  

    
       </Box>   
      </StyledModal>
     
    </div>
    </>

  )
}

export default CartSignup
