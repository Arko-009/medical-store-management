import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContext from "./AuthContext";

// 🔥 load logged-in user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext.Provider value={{ user }}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
