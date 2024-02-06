import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import Landing from "./pages/LandingPage/Landing";
import ErrorPage from './pages/ErrorPage/Error';
import ProjectPage from './pages/ProjectPage/Projects';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/projects",
        element: <ProjectPage />,
    },
    {
        path: "/about",
        element: <div>Hello world!</div>,
    }
]);

root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );