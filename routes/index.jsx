import { createBrowserRouter } from "react-router-dom";
import Shop from '../src/shop';
import Home from "../src/home";

export const router = createBrowserRouter([
  {
    path: '/shop',
    element: <Shop />,
  },
])