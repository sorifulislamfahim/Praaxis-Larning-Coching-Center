import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user state Changed', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    } , []);

    const logOut = () => {
        return signOut(auth)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {user, providerLogIn, logOut, createUser, logInUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;