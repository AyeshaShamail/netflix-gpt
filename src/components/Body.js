import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // To set up the eventListener for once - we're using the useEffect hook - we're doing this to check authentication and set up the store

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
