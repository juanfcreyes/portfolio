import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { AppProvider } from "./context/AppContext/AppContext";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./i18n";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
