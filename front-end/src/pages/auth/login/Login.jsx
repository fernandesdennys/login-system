import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginRequest } from "../../../services/api";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const data = await loginRequest(email, password);
      console.log("Resposta da API", data);
      
      if (!data.token) {
        throw new Error("Token não recebido do servidor")
      }
      localStorage.setItem("token", "fake-token");

  window.location.href = "/dashboard";
      /* localStorage.setItem("token", data.token);
      navigate("/dashboard") */;
    } catch (error) {
      console.error("Erro:", error);
      alert(error.message);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>LOGIN</h1>

        {/* USERNAME */}
        <div className="input-field relative text-white">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent outline-none py-2"
          />

          <label
            className="absolute left-5 -top-5 text-gray-500 transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:-top-5
            peer-focus:text-sm
            peer-focus:text-blue-500
            peer-valid:-top-5
            peer-valid:text-sm"
          >
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
            className="peer w-full border-b-2 border-gray-300 bg-transparent outline-none"
          />

          <label
            className="absolute left-5 -top-5 text-gray-500 transition-all
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:-top-5
            peer-focus:text-sm
            peer-focus:text-blue-500
            peer-valid:-top-5
            peer-valid:text-sm"
          >
            Password
          </label>

          <FaLock className="icon absolute right-0 top-3" />
        </div>

        <div className="box-button">
          <button type="submit" className="btn-login">
            LOGIN
          </button>
        </div>

        <div className="text-register">
          <Link to="/register">Create account</Link>
          <Link to="#" className="link">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
