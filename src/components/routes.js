import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Todo from "./Todo";
import Edit from "./Edit";
export default function Routes() {
  return (
    <HashRouter>
      <Route path="/todos" exact component={Todo}></Route>
      <Route path="/todos/:id/edit" component={Edit}></Route>
      <Redirect from="*" to="/todos"></Redirect>
    </HashRouter>
  );
}
