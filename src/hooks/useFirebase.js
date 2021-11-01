import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";
initializeAuthentication();
const useFirebase =()=>{
    const [users,setUsers]=useState({});
    const [isLoading,setIsLoading]=useState(true);
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
            setIsLoading(false);
        });
        return ()=>unsubscribded;
    },[]);
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            
          })
          .finally(()=>setIsLoading(false));
    }


    
    return{
        users,
        logOut,
        signInUsingGoggle,
        isLoading,
        setIsLoading
    }
}
export default useFirebase;
