import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';



const Login = () => {

    const { signInWithGoogle, setUser, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        // console.log("clicked");
        signInWithGoogle()
        .then(res => {
            setIsLoading(true);
            setUser(res.user);
            sessionStorage.setItem("email", res.user.email);
            history.push(url);
            
        })
        .catch(err => console.log(err))
        .finally(()=>{
            setIsLoading(false);
        })
       
    }
    
    return (
        <div className="m-5 p-5">
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-success">Google Login</button>
        </div>
    );
};

export default Login;