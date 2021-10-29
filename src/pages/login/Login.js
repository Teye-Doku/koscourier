import LockIcon from '@material-ui/icons/Lock';

import './Login.css';
 function Login() {
    return (
        <div className="login" style={{height:"2000px"}}>
             <div className="login__body">
                 <div className="login__lock">
                      <div className="lock__container">
                       <LockIcon />
                      </div>
                      <h3>Log In To Your Account</h3>
                 </div>
                 <div className="login__content">
                     <div className='login-item'>
                         <p>Email<span>*</span></p>
                         <input type='text' />
                     </div>
                     <div className='login-item'>
                         <p>Password<span>*</span></p>
                         <input type='password' />
                     </div>

                     <button> Log In</button>
                     <div className="login__create">
                         <p>New To KosCourier?</p>
                         <button>Create Account</button>
                     </div>
                 </div>
             </div>
        </div>
    )
}


export default Login;