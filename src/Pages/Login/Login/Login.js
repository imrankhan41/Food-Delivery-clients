import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { signInUsingGoggle,setIsLoading}=useAuth();
    const location =useLocation();
    console.log("came from",location.state?.from)
    const redirect_uri=location.state?.from || "/home"
    const history =useHistory()
    const handleGoogleLogIn =()=>{
        signInUsingGoggle()
        .then(result => {
            history.push(redirect_uri)
        }) 
        .finally(()=>setIsLoading(false));
    }
    return (
        <div className="login">
            
            <h1>Please Log in</h1>
            <button onClick={  handleGoogleLogIn} className="login-button">Log in</button>
        </div>
    );
};

export default Login;