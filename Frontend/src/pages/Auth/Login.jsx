import React from "react";

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
      <h2 className="text-xl font-bold text-center">Welcome back</h2>
      <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-100 border rounded" />
      <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-gray-100 border rounded" />
      <a href="/forgot-password" className="text-sm text-blue-600">Forgot password?</a>
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Log in</button>
    </form>
  </div>
);

export default Login;
