import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



  // step 1
 export  const AuthContext =createContext(null);


 const auth = getAuth(app);



        //step 3
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true)

  const createUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)

  }
  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
const logOut=()=>{
   return signOut(auth)
}

// observe user auth change
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        // loading releted kaj akm
        setLoading(false)
    })
    // stop observing while unmounting

    return ()=>{
        return unsubscribe()
    }


},[])

    //step 4
const authInfo={
    user,
    loading,
    createUser,
    signIn,
    logOut
}
    return (
        // step 2 >set provider 
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;