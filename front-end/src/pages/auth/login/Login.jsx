import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

function Login() {
  return (
    <div className="container">
      <form>
        <h1>LOGIN</h1>

        {/* USERNAME */}
        <div className="input-field relative">
          <input
            type="email"
            placeholder=" "
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent outline-none py-2"/>

          <label className="absolute left-5 top-0 text-gray-500 transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:-top-5
            peer-focus:text-sm
            peer-focus:text-blue-500">
            Username
          </label>

          <FaUser className="icon absolute right-0 top-3" />
        </div>

        {/* PASSWORD */}
        <div className="input-field relative">
          <input
            type="password"
            placeholder=" "
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent outline-none py-2"/>

          <label className="absolute left-5 top-0 text-gray-500 transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:-top-5
            peer-focus:text-sm
            peer-focus:text-blue-500">
            Password
          </label>

          <FaLock className="icon absolute right-0 top-3" />
        </div>

        <div className="box-button">
          <button className="btn-login">LOGIN</button>
        </div>

        <div className="text-register">
          <a href="/register">Create account</a>
          <a href="#" className="link">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;