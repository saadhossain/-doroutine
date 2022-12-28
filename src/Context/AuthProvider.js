import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)

    //User Registration using email and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {userRegister}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;