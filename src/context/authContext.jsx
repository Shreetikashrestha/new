import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : null
  );
  const [accessToken, setAccessToken] = useState(null);

  const login = async (formData) => {
    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      formData
    );
    console.log(res.data);
    console.log(res.data.data.access_token);
    setCurrentUser(res.data.data.user);
    setAccessToken(res.data.data.access_token);
    return res;
  };

  const logout = async () => {
    setCurrentUser(null);
    setAccessToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser) || "null");
    if (accessToken !== null) {
      localStorage.setItem("accessToken", accessToken);
    }
  }, [currentUser, accessToken]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
