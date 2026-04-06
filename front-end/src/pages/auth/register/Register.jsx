import "./Register.css"
import { Link } from 'react-router-dom';

function Register() {
return (
  <div>
    <form>
    <h1 className="cadastro"> CADASTRO</h1>
    </form>
    <footer className="bg-white/20  w-screen fixed bottom-0 flex justify-center items-center left-0 h-10 text-[12px] text-white ">
  <p>© {new Date().getFullYear()} Dennys & Guilherme. All rights reserved.</p>
    </footer>
  </div>
)
}
export default Register