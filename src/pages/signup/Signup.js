import LockIcon from '@material-ui/icons/Lock';
import {
 useHistory
}from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Signup.css';
 function Signup() {
     const history = useHistory();
     const {  register, handleSubmit ,errors } = useForm();
     const onSubmit = values => console.log(values);

    return (
        <div className="signup" style={{height:"1500px"}}>
             <div className="signup__body">
               <form onSubmit={handleSubmit(onSubmit)}>
               <div className="signup__lock">
                      <div className="lock__container">
                       <LockIcon />
                      </div>
                      <h3>Create Your Account</h3>
                 </div>
                 <div className="signup__content">
                     <div className='signup-item'>
                         <p>Name<span>*</span></p>
                         <input type='text' name="name" ref={register({
                           required:'name is required'
                         })} />
                         {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
                     </div>
                     <div className='signup-item'>
                         <p>Email<span>*</span></p>
                         <input type='text' name="email" ref={register({
                      required:'email is required',
                      pattern:{
                        value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message:'Email is invalid'
                      }
                    })}/>
                         {errors.email && <p style={{color:"red"}}>{errors.name.message}</p>}
                     </div>
                     <div className='signup-item'>
                         <p>Password<span>*</span></p>
                        <input type="password"  name="password" ref={register({
                      required:'Password is required',
                      minLength:{
                        value:6,
                        message:'Password must at least 6 characters'
                      }
                    })} />
                    {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                     </div>
                     <div className='signup-item'>
                         <p>Phone<span>*</span></p>
                         <input type='password' name="phone" ref={register({
                             required:'phone number is required'
                         })} />
                         {errors.phone && <p style={{color:"red"}}>{errors.phone.message}</p>}
                     </div>

                     <button> Sign Up</button>
                     <hr></hr>
                     <div className="signup__create">
                         <p>Already have an account?</p>
                         <button onClick={()=>history.push('/login')}>Log In</button>
                     </div>
                 </div>
               </form>
             </div>
        </div>
    )
}


export default Signup;