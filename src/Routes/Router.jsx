import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home/Home";
import ProjectsPage from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects",
        Component: ProjectsPage,
      },
    ],
  },
]);
