import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/auth/register/Register";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Products from './pages/products/Products';
import "./App.css";
import Layout from './Layout';

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
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/products" element={<Products />} />
  </Route>

  {/* rota protegida (você pode decidir se entra no layout ou não) */}
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
