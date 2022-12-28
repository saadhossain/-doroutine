import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    //Set Logged in user to a state
    const [user, setUser] = useState()
    //User Registration using email and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update User Profile after create a user
    const updateUser = (fullName, profileImage) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL:profileImage
        })
    }
    //User Login using email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Find logged in user from auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unSubscribe()
    }, [auth])
    const userInfo = {userRegister, updateUser, userLogin, user}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;