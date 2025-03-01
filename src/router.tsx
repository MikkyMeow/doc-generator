import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h2>Main</h2>
    },
    {
        path: '/about',
        element: <h2>About</h2>
    },
    {
        path: '/new',
        element: <h2>News</h2>
    },
])