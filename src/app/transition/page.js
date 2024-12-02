"use client"
import { useContext ,useState, useEffect} from 'react';
import React from 'react'
import Loading from '../loading/page';
import MyContext from '@/context/mycontext';
import {db} from "@/firebase-config"
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

function Transition() {

    const [isLoading, setIsLoading] = useState(true); 
    const [data, setData] = useState(''); 

    const {user, setUser} = useContext(MyContext)

    
 const router = useRouter();

    const userDetails = async () => {
        try {
          const docRef = doc(db, "profile", `${user?.uid}`);
          const docSnaps = await getDoc(docRef)
    
          if (docSnaps.exists()) {
            setData(docSnaps.data()); 
            console.log("Document data:", docSnaps.data());
            console.log(data)
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch (error) { console.error('an error') }
        finally {
          setIsLoading(false); 
        }
    
      }
    
      useEffect(() => {
        userDetails();
      }, [user?.uid]);

      const handleNavigation = () => {
        if (data) {
          router.push('/profile'); 
        } else {
          router.push('/authdetails');  
        }
      };
    
    useEffect(() => {
        handleNavigation(); 
    }, [data])
     
  
      if (isLoading) {
          return <Loading/>;
    } 

  return (
    <div>
      
    </div>
  )
}

export default Transition
