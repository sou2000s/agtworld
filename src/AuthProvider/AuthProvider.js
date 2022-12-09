import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
export const  AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user , setUser] = useState({name: "" , photo:""})
  const googleProvider = new GoogleAuthProvider()

  const createUser = () =>{
    return signInWithPopup(auth , googleProvider)
  }
  
  const authInfo = {user , createUser , setUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;