import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import Portfolio from "../pages/portfolio/portfolio";
import Resume from "../pages/resume/resume";

export const routes = [
    {
        key: 1,
        path: "/",
        element: <About />,
    },
    {
        key: 2,
        path: "/resume",
        element: <Resume />,
    },
    {
        key: 3,
        path: "/portfolio",
        element: <Portfolio />,
    },
    {
        key: 4,
        path: "/contact",
        element: <Contact />,
    },
]