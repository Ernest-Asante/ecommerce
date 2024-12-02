'use client'
import React, {useState, useEffect, useContext} from 'react'
import ProfileAppBar from '../appbar_profile/page'
import Link from 'next/link'
import MyContext from '@/context/mycontext';
import { addDoc, collection, query, where, getDocs , Timestamp} from 'firebase/firestore';
import { db } from '@/firebase-config';

function Profile() {

  const {
     authKey
  } = useContext(MyContext) 


  const [email, setEmail] = useState(authKey);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null); 
  const [userId, setUserId] = useState(null); 
  const [data, setData] = useState([]);


  
  useEffect(() => {

    const fetchData = async () =>
    {
     try {
      const ref = collection(db, 'profile')
 
      const q = query(ref, where('email', '==', email))
 
      const querySnapshot = await getDocs(q); 
      if(!querySnapshot.empty) {
 
       setName(querySnapshot.docs[0].data().name)
       setPhone(querySnapshot.docs[0].data().phone)
       setUserId(querySnapshot.docs[0].data().userId) 
       console.log(querySnapshot.docs[0].data()) 
     //  const docData = querySnapshot.docs[0].data();  
       
       console.log(data) 
      } else {
       console.log('no data found')  
      } 
     } catch (error) {
       console.log(error) 
     }
    }
 
       fetchData();
    }, []);


    useEffect(() => {

      const fetchOrders = async () =>
      {
       try {
        const ref = collection(db, 'orders')
   
        const q = query(ref, where('email', '==', email))
   
        const querySnapshot = await getDocs(q); 
        if(!querySnapshot.empty) {
   
        
       //  const docData = querySnapshot.docs[0].data();  

    
       const results =  querySnapshot.docs.map(doc => ({
          id:doc.id, ...doc.data()
        })
      );

      
       setData(results)
        
        } else {
         console.log('no data found')  
        } 
       } catch (error) {
         console.log(error) 
       }
      }
   
         fetchOrders();
      }, []);

      console.log(data) 
 

  return (
    <div>
     <ProfileAppBar/>
     <div style={{marginTop:"60px"}}></div>
     <div style={{display:"flex", flexDirection:"row"}}>
       <div style={{flex:1}}>
       <img src='/images/b3.jpeg'
           alt='heloo' style={{ borderRadius:"50%", height:"120px", width:"125px",marginTop:"10px", marginLeft:"5px"}} /> 
       </div>
       <div style={{flex:3, display:"flex", flexDirection:"column", marginLeft:"10px", marginTop:"10px"}}>
         <p>{name && name}</p>
         <p style={{padding:0,margin:0}}>{email && email}</p>
         <p>{phone && phone}</p>
       </div>

     </div>

     <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <Link href="/checkout"> 
         <button style={{border:"1px solid green",height:"40px", width:"42vw", color:'green', backgroundColor:"white", marginLeft:"3px", marginRight:"8px", marginTop:"18px", borderRadius:"5px", fontSize:"18px"}}>LOG OUT</button>
         </Link>

         <Link href="/checkout"> 
         <button style={{border:"none",height:"40px", width:"42vw", backgroundColor:"green", color:'white', marginLeft:"3px", marginRight:"8px", marginTop:"18px", borderRadius:"5px", fontSize:"18px"}}>EDIT</button>
         </Link> 
      </div>


      <div style={{height:"1px", marginTop:"10px", width:"92vw", marginLeft:"3px", border:"1px solid green"}}></div>
      <div>
        <h3 style={{marginTop:"25px"}}>MY ORDERS</h3>
      </div>



      {data && data.map((item, index) => (
         <Link href={`/receipts/${item.id}`}>
         <> 
      <div key={item.id} style={{ height:"70px", width:"94vw", paddingLeft:"8px", marginTop:"10px", border:"1px solid green", marginBottom:"10px"}}>
        <p style={{padding:0, marginTop:"7px"}}>TradeId: {item.amount}</p>
        <p style={{padding:0, margin:0}}>Date: {item.createdAt.seconds}</p>  
        </div>
      </>
      </Link> 
      ))}  
    
   </div>
  )
}

export default Profile
