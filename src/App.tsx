import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from"./pages/Home";
import Login from './components/auth/Login';
import Register from './components/auth/Register';

interface IProps {

}

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/the-loai", element: <Home /> },
    { path: "/login", element : <Login />},
    { path: "/register", element: <Register/>}
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

