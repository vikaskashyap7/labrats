// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import App from "./App.jsx";
// import "./index.css";
// import Ai from "./components/gemni/Ai.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/new-page" element={<Ai />}/>
//        </Routes>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Ai from "./components/gemni/Ai.jsx";
import ContextProvider from "./components/gemni/context/Context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <Router> {/* Wrap everything inside Router */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/new-page" element={<Ai />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </ContextProvider>
);
