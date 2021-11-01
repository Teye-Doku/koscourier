import LockIcon from '@material-ui/icons/Lock';

import './Signup.css';
 function Signup() {
    return (
        <div className="signup" style={{height:"1500px"}}>
             <div className="signup__body">
                 <div className="signup__lock">
                      <div className="lock__container">
                       <LockIcon />
                      </div>
                      <h3>Create Your Account</h3>
                 </div>
                 <div className="signup__content">
                     <div className='signup-item'>
                         <p>Name<span>*</span></p>
                         <input type='text' />
                     </div>
                     <div className='signup-item'>
                         <p>Email<span>*</span></p>
                         <input type='text' />
                     </div>
                     <div className='signup-item'>
                         <p>Password<span>*</span></p>
                         <input type='password' />
                     </div>

                     <button> Sign Up</button>
                     <hr></hr>
                     <div className="signup__create">
                         <p>Already have an account?</p>
                         <button>Log In</button>
                     </div>
                 </div>
             </div>
        </div>
    )
}


export default Signup;