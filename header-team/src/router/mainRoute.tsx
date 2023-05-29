import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"

export const mainRoute = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: "about",
            element: <AboutPage />
        },
    ]
}]) 