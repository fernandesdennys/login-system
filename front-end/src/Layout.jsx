import Header from "./Components/Header"; 
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="pt-20">
      <Outlet />
      </main>
    </>
  );
}
export default Layout;