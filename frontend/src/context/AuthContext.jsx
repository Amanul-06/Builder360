import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const API_URL = "http://localhost:5001";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email, password) => {
    try {
      console.log("Sending login request...");
      console.log("API URL:", `${API_URL}/api/auth/login`);

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log("Response status:", response.status);

      const data = await response.json();

      console.log("Response data:", data);

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Login failed",
        };
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setToken(data.token);
      setUser(data.user);

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      console.error("LOGIN REQUEST ERROR:", error);

      return {
        success: false,
        message: error.message || "Unable to connect to the server",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
