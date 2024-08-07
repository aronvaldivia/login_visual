import React from 'react';
import './LoginForm.css';
import { FaDog , FaLock  } from "react-icons/fa6";

const LoginForm = () =>{
    return(
        <div className='logincara'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaDog  className='icon'/>
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon' />
            </div>

            <div className="recordar-olvide">

                <label><input type="checkbox"/>recordar</label>
                <a href="#">Olvide contraseña</a>
            </div>

          
            <button type="submit"> Login </button>
            <div className="register-link">
                <p>No tienes cuenta? <a href="#">Registrate</a></p>
            </div>




        </form>
        </div>
    );
}
export default LoginForm; 