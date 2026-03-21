import {FaUser, FaLock} from "react-icons/fa";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='container'>
      <form >

        <h1>LOGIN</h1>
        <div className='input-field'>
          <input type="email" name="" id="" placeholder='Username' required/>
          <FaUser className="icon"/>
        </div>

          <div className='input-field'>
            <input type="passworld" name="" id="" placeholder='Password' required/>
            <FaLock className="icon"/>
          </div>

          <div className="box-button">
            <button className="btn-login">LOGIN</button>
          </div>
          <div className="text-register">
            <a href="./register">Create account</a>
            <a href="#" className="link">Forgot Password?</a>
          </div>
      </form>
    </div>

  );
}
export default Login;
