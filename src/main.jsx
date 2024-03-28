import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout.jsx";
import Hero from "./Hero.jsx";
import Blogs from "./Blogs.jsx";
import FullPost from "./FullPost.jsx";
import Content from "./Content.jsx";
import Author from "./Author.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/blogs",
        loader: () => fetch("https://dev.to/api/articles/latest"),
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
      {
        path: "/blogs/:postId",
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.postId}`),
        element: <FullPost></FullPost>,
        children: [
          {
            path: "/blogs/:postId",
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.postId}`),
            element: <Content></Content>,
          },
          {
            path: "/blogs/:postId/author",
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.postId}`),
            element: <Author></Author>,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
