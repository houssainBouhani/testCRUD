import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// react router setup
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import EditUser from "./pages/editUser/EditUser";
import AddUser from "./pages/addUser/AddUser";
import NotFound from "./pages/error/NotFound";

//  inject redux store 

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
