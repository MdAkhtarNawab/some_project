import { lazy } from "react";

const Home = lazy(() => import("../Screens/Home"));
const AboutUs = lazy(() => import("../Screens/AboutUs"));
const Help = lazy(() => import("../Screens/Help"));
const Contact = lazy(() => import("../Screens/Contact"));
export const routesHelper = [
  {
    name: "Home",
    element: <Home />,
    route: "/",
    exact: true,
  },
  {
    name: "About Us",
    element: <AboutUs />,
    route: "/about_us",
  },
  {
    name: "Contact",
    element: <Contact />,
    route: "/contact",
  },
  {
    name: "Help",
    element: <Help />,
    route: "/help",
  },
];
