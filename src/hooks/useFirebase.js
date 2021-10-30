import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase =()=>{
    const [users,setUsers]=useState({});
    const auth = getAuth();
    
    const signInUsingGoggle =()=>{
        const goggleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, goggleProvider);
       
    };
    useEffect(()=>{
        const unsubscribded= onAuthStateChanged(auth, user => {

            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        });
        return ()=>unsubscribded;
    },[]);
    const logOut=()=>{
        signOut(auth)
        .then(() => {
            
          })
    }
 
    
    return{
        users,
        signInUsingGoggle,
        logOut
    }
}
export default useFirebase;