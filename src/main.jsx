import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./home/index.jsx";
import Shop from "./shop/index.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Home />
    <Shop />
  </StrictMode>
);
