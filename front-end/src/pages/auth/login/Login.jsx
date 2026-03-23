import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useState } from "react";
import './Login.css';

function handleLogin(e) {
  e.preventDefault();
  fetch("Email:", email);
  fetch("Password:", password);
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>LOGIN</h1>

        {/* USERNAME */}
        <div className="input-field relative text-white">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent outline-none py-2"/>

          <label className="absolute left-5 -top-5 text-gray-500 transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:-top-5
            peer-focus:text-sm
            peer-focus:text-blue-500
            peer-valid:-top-5
            peer-valid:text-sm">
            Username
          </label>

          <FaUser className="icon absolute right-0 top-3" />
        </div>

        {/* PASSWORD */}
        <div className="input-field relative text-white">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent outline-none"/>

          <label className="absolute left-5 -top-5 text-gray-500 transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:-top-5
            peer-focus:text-sm
            peer-focus:text-blue-500
            peer-valid:-top-5
            peer-valid:text-sm">
            Password
          </label>

          <FaLock className="icon absolute right-0 top-3" />
        </div>

        <div className="box-button">
          <button type='submit' className="btn-login">LOGIN</button>
        </div>

        <div className="text-register">
          <Link to="/register">Create account</Link>
          <Link to="#" className="link">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;