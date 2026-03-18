import {FaUser, FaLock} from "react-icons/fa";
import './Login.css';

function Login() {
  return (
    <html>
      <body>        
    <div className='container'>
      <form >
        <h1>Login to your Account</h1>
        <div className='input-field'>
          <label>Login: </label>
          <input type="email" name="" id="" placeholder='example@email.com' required/>
          <FaUser className="icon"/>
        </div>

          <div className='input-field'>
            <label>Password: </label>
            <input type="passworld" name="" id="" placeholder='enter your password' required/>
            <FaLock className="icon"/>
          </div>
          <button>Submit</button>
          <p>Nao tem um conta ?</p>
          <a href="#">Criar conta</a>
          <a href="#">Esqueci minha senha!</a>
      </form>
    </div>
      </body>
    </html>
  );
}
export default Login;
