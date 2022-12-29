import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const googleProvider = new GoogleAuthProvider()
    //Set Logged in user to a state
    const [user, setUser] = useState()
    //User Registration using email and password
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update User Profile after create a user
    const updateUser = (fullName, profileImage) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL:profileImage
        })
    }
    //User Login using email and password
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //User logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //Login/Register User using Google Account
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 
    //Find logged in user from auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [auth])
    const userInfo = {userRegister, updateUser, userLogin, user, logOut, loading, setLoading, googleLogin, darkMode, setDarkMode}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;