import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import Dashboard from './pages/UserDashboard';
import Profile from './pages/UserProfile'
import Loans from './pages/UserLoans'

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgetPassword';
import LoginRegister from './pages/Auth/LoginRegister';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public/Auth pages (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth" element={<LoginRegister />} />

      {/* User pages (with layout) */}
      <Route path="/" element={<Layout><Home /></Layout>} />   

      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/loans" element={<Layout><Loans /></Layout>} />

    </Routes>
  );
};

export default AppRoutes;

