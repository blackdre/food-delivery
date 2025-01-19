import { createContext, useState, useEffect } from "react";
import PocketBase from "pocketbase";

export const AuthContext = createContext();

const pb = new PocketBase("http://127.0.0.1:8090"); // Update the URL to your PocketBase instance

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(pb.authStore.model);
  const [role, setRole] = useState(user?.role || null);

  useEffect(() => {
    const authChangeListener = pb.authStore.onChange(() => {
      setUser(pb.authStore.model);
      setRole(pb.authStore.model?.role || null);
    });

    return () => pb.authStore.offChange(authChangeListener);
  }, []);

  const login = async (email, password) => {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      setUser(authData.user);
      setRole(authData.user.role);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const logout = async () => {
    pb.authStore.clear();
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
