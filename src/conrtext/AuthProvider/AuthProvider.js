import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Google Provider 
    const providerLogIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Github Provider 
    const githubProviderLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user state Changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    } , []);

    // log out btn handle 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // user email and pasword registration 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user email and pasword log in
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const authInfo = {user, loading, githubProviderLogIn, updateUserProfile, providerLogIn, logOut, createUser, logInUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;