import React from "react";
import ReactDOM from "react-dom/client";
import PostList, { loader as postLoader } from "./routes/PostList";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import NewPost, { action as actionNewPost } from "./routes/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PostList />,
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: actionNewPost },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
