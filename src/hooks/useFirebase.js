import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile , signOut } from 'firebase/auth';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=>unsubscribe()
    }, [])

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        return signInWithPopup( auth, googleProvider)
    }

    const updateName = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            window.location.reload();  
          }).catch((error) => {
            
          });
    }

    const logOut = ()=>{
        signOut(auth)
        .then(res =>{
            setUser({})
        })
        .catch(err =>{

        })
    }

    return {
        user, setUser,
        signInWithGoogle,
        isLoading,
        setIsLoading,
        logOut
    }
};

export default useFirebase;