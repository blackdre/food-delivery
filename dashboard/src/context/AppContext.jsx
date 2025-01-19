// src/context/AppContext.js
import { createContext } from "react";
import Logo from "../assets/logo.png";
import BgImage from "../assets/orange.png";
import AuthBg from "../assets/auth-img.webp";

// Create the context
export const AppContext = createContext();

// Define the provider component
export const AppProvider = ({ children }) => {
  const appName = "Sithume";
  const logo = Logo;
  const bgImage = BgImage;

  return (
    <AppContext.Provider value={{ appName, logo, bgImage, AuthBg }}>
      {children}
    </AppContext.Provider>
  );
};
