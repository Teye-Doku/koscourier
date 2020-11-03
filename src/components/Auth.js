import React from 'react';
import './Auth.css';

function Auth() {
     return(
     <div>
         <img className="auth__image" src={require('../assets/images/kosimage.jpg')}/>    
        <div className="auth">
            <h1>Sign In</h1>
            <h4>E-mail</h4>
            <input type="email"/>
            <h4>Password</h4>
            <input type="password"/>
            <button className="auth__sign">Sign in</button>
            <p>
             By signing in to koscourier,you agree to our Terms and Conditions.
            </p>
            <button className="auth__register">Create Koscourier Account</button>
         </div>
     </div>
     )
}
export default Auth;