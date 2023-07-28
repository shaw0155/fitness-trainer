import React from "react";
import ReactDOM from "react-dom/client";
import "./style/_index.scss";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Onlinecoaching from "./pages/Onlinecoaching";
import Contact from "./pages/contact";
import ScrollToTop from "./utils/ScrollToTop";

const router = createBrowserRouter([
  {
    element: (
      <ScrollToTop>
        <App />
      </ScrollToTop>
    ),
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/about", element: <About /> },
      { path: "/online-coaching", element: <Onlinecoaching /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
