import { createBrowserRouter } from "react-router-dom";
import Team from "../pages/team";

export const router = createBrowserRouter([
  { path: "/", errorElement: <div>Page not found</div> },
  { path: "/team", element: <Team /> },
]);
