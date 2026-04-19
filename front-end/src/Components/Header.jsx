import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Home", path: "/home" },
    { name: "Perfil", path: "/perfil" },
    { name: "Contact", path: "/contact" },
    { name: "Products", path: "/products" },
  ];

  return (
    <header className="main-header bg-white/30 w-[80%] text-[25px] rounded-full text-white h-20 flex items-center justify-center gap-20 fixed top-5 backdrop-blur-lg border overflow-hidden">
      
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => ` ${
    isActive
      ? "text-black  rounded-full w-70 flex justify-center backdrop-blur-sm border border-white font-bold"
      : "text-white hover:text-black "
  }`
}
        >
          {link.name}
        </NavLink>
      ))}

    </header>
  );
}

export default Header;