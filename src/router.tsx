import { createBrowserRouter } from "react-router-dom";
import { EditorPage } from "./components/pages/EditorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h2>Main</h2>
    },
    {
        path: '/editor',
        element: <EditorPage />
    },
])