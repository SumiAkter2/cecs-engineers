import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./Routes/routes";
import { RouterProvider } from "react-router-dom";
// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen mx-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>
);
