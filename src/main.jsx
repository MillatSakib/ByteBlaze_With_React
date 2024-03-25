import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout.jsx";
import Hero from "./Hero.jsx";
import Blogs from "./Blogs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/bookmarks",
        element: <div>Hello. This is bookmark section</div>,
      },
      {
        path: "/",
        element: <Hero></Hero>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
