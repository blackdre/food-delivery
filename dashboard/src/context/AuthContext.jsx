import { createContext, useState, useEffect } from "react";
import PocketBase from "pocketbase";

export const AuthContext = createContext();

const pb = new PocketBase("http://127.0.0.1:8090"); // Replace with your PocketBase URL

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(pb.authStore.model);
  const [token, setToken] = useState(pb.authStore.token);
  const [role, setRole] = useState(user?.role || null); // Ensure your PocketBase users have a `role` field

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(pb.authStore.model);
      setToken(pb.authStore.token);
      setRole(pb.authStore.model?.role || null);
    };

    // Subscribe to auth changes
    pb.authStore.onChange(handleAuthChange);

    return () => pb.authStore.clear(handleAuthChange);
  }, []);

  const login = async (email, password) => {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      setUser(authData.record);
      setToken(pb.authStore.token);
      setRole(authData.record.role);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    pb.authStore.clear();
    setUser(null);
    setToken(null);
    setRole(null);
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{ user, token, role, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
