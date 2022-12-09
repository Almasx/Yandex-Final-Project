import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <div>Page not found</div> },
]);
