import { createBrowserRouter } from "react-router-dom";
import Projects from "../pages/Projects";
import Team from "../pages/Team";

export const router = createBrowserRouter([
  { path: "/", errorElement: <div>Page not found</div> },
  { path: "/team", element: <Team /> },
  { path: "/projects", element: <Projects /> },
]);
