import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  { path: "/", element: <HomeLayout /> },
  { path: "/auth", element: <h2>authentication </h2> },
  { path: "/news", element: <h2>news layout</h2> },
  { path: "/*", element: <h2>error</h2> },
]);
export default router;
