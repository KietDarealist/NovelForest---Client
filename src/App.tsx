import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from"./pages/Home";

interface IProps {

}

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/the-loai", element: <Home /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

