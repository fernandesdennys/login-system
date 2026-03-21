import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isRegister = location.pathname === "/register"

  return (
    <div
      className={`App ${isRegister ? 'bg-register' : 'bg-login'}`}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 2, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.7 }}
              >
                <Login />
              </motion.div>
            }
          />

          <Route
            path="/register"
            element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 2, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.7 }}
              >
                <Register />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
