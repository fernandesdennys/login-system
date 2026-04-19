import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/auth/register/Register";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* rotas SEM header */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* rotas COM header */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
