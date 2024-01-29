import './assets/styles/main.scss';
import Home from './pages/Home';
import AboutUs from './pages/About';
import NotFound from './pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "about",
      element: <AboutUs />
    }
  ])

  return <RouterProvider router={router} />
}

export { Router };