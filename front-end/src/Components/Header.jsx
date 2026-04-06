function Header() {
  return (
    <header className="main-header bg-white/20 w-screen text-[20px] text-white h-20 flex justify-around items-center fixed top-0 left-0 backdrop-blur-sm">
      <a href="/home">HOME</a>
      <p className="text-[40px]">|</p>
      <a href="/about">ABOUT</a>
      <p className="text-[40px]">|</p>
      <a href="/contact">CONTACT</a>
      <p className="text-[40px]">|</p>
      <a href="/products">PRODUCTS</a>
    </header>
  );
}

export default Header;