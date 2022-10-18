import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext()


const  auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSingIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    //Why are we doing this? 
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            setLoading(false)
            console.log('Auth state changed', currentUser)
        })
        return () => {unsubscribe()}
    } , [])

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

   
    const authInfo = {user,loading, createUser, userSingIn, logOut, signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;