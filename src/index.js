import React from "react";
import App from "./App";
import Login from "../src/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client"; // Import createRoot from the correct location

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Login",
    element: <Login />
  }
]);

const root = createRoot(document.getElementById("root")); // Use createRoot from the correct location
root.render(<RouterProvider router={router} />);
