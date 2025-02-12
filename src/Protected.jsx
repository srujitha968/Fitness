import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './Firebase'
import { Navigate } from 'react-router-dom';


const Protected = ({children}) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState('')

    useEffect(()=>{
        const s = onAuthStateChanged(auth, (currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        })
        return ()=> s();
    },[])

    if(loading){
        return <p>loading...</p>
    }
    
    return user ? children : <Navigate to='/login'></Navigate>
  
}

export default Protected
