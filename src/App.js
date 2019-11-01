import React from "react";
import Router from "./components/routes";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
