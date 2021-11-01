import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const {signInUsingGoggle,setIsLoading}=useAuth()
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
            <form >
            <input  className="login1" type="email" name="" id="" placeholder="Email" required/> <br/>
            <input className="login1" type="password" name="" id="" placeholder="Password" required/> <br />
            <button className="login1 button">LogIn</button>
            </form>
            <div>Or</div>
            <button onClick={handleGoogleLogIn} className="login1 button">Google Log in</button>
        </div>
    );
};

export default Login;
