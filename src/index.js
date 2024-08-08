// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from "react-router-dom";
import routes from './routes';
import './index.css';

ReactDOM.render(
  <RouterProvider router={routes} />,
  document.getElementById('root')
);
