import React, { createContext } from 'react';



  // step 1
 export  const AuthContext =createContext(null);

        //step 3
const AuthProvider = ({children}) => {
  const user={email:"sagor"}



    //step 4
const authInfo={
    user,
}
    return (
        // step 2 >set provider 
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;