import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './App';
import {Provider} from "react-redux"
import {store} from "./states/index";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


