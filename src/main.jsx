import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { router } from "./Routes/routes";
import App from "./App";

// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen mx-auto ">
      <Router>
        <App />
      </Router>
      {/* <Router>
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      </Router> */}
      {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
  </React.StrictMode>
);
