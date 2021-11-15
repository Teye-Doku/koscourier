import { useContext } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import { 
 useHistory
} from 'react-router-dom'
import AuthContext from 'context/auth-context';
import './Login.css';
import { useForm } from 'react-hook-form';





 function Login() {
     const auth = useContext(AuthContext);
     const history = useHistory();
     const { register,handleSubmit,errors } = useForm();

     const onSubmit = values => console.log(values);
    return (
        <div className="login" style={{height:"2000px"}}>
             <div className="login__body">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login__lock">
                      <div className="lock__container">
                       <LockIcon />
                      </div>
                      <h3>Log In To Your Account</h3>
                 </div>
                 <div className="login__content">
                     <div className='login-item'>
                         <p>Email<span>*</span></p>
                         <input type='text' name="email" ref={register({
                           required:'email is required',
                           pattern:{
                             value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                             message:'Email is invalid'
                           }
                         })} />
                         {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                     </div>
                     <div className='login-item'>
                         <p>Password<span>*</span></p>
                         <input type='password' name="password" ref={register({
                            required:'Password is required',
                            minLength:{
                              value:6,
                              message:'Password must at least 6 characters'
                            }
                         })} />
                          {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                     </div>

                     <button type="submit"> Log In</button>
                     <div className="login__create">
                         <p>New To KosCourier?</p>
                         <button onClick={()=>history.push('/signup')}>Create Account</button>
                     </div>
                 </div>
                </form>
             </div>
        </div>
    )
}


export default Login;