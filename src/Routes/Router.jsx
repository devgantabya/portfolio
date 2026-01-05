import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home/Home";
import Projects from "../Components/Projects/Projects";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

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
        path: "about",
        Component: About,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
