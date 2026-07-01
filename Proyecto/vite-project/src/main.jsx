import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { FavoritosProvider } from "./context/FavoritosContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritosProvider>
      <App />
    </FavoritosProvider>
  </StrictMode>
);