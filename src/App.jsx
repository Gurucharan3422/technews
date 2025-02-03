import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from './Components/authContext';  // Ensure correct import path
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import News from "./News";
import Reviews from "./Reviews";
import Contact from "./Contact";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout /> {/* Handles Navbar visibility */}
      </Router>
    </AuthProvider>
  );
};

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext); // Access AuthContext here

  // useEffect to redirect to /home if not authenticated
  useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register") {
      navigate("/login"); // Redirect to login if not authenticated and not on login/register page
    }
  }, [isAuthenticated, location.pathname, navigate]);

  // Hide Navbar only on Login and Register pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />} {/* Show Navbar only if not on Login/Register */}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Technews" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* Private Routes */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext); // Access AuthContext here
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;