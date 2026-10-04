import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<Home />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
