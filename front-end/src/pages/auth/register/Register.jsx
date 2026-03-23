import "./Register.css"

function Register() {
return (
  <div>
    <header className="main-header bg-white/20 w-screen text-[20px] text-white h-20 flex justify-around items-center fixed top-0 left-0 backdrop-blur-sm hover:">
      <a href="./Home">HOME</a>
      <p className="text-[40px]">|</p>
      <a href="./About">ABOUT</a>
      <p  className="text-[40px]">|</p>
      <a href="./Contact">CONTACT</a>
      <p  className="text-[40px]">|</p>
      <a href="./Products">PRODUCTS</a>
    </header>
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