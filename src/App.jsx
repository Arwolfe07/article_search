import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

// Creating different routes for different pages to be mounted
const router = createHashRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <PostDetails/>
      }
    ],
  },
]);

function App() {
  // returning the routes for apps
  return <RouterProvider router={router}/>;
}

export default App;
