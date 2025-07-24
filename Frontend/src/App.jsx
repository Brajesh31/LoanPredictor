import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './AppRoutes';

const App = () => (
  <BrowserRouter>
  <ToastContainer position="top-right" autoClose={3000} />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
