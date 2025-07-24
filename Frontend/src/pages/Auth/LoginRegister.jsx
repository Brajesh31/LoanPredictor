import React from 'react';

const LoginRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Login */}
        <div>
          <h2 className="text-xl font-bold mb-4">Welcome back</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
            <a href="/forgot-password" className="text-sm text-blue-600">Forgot password?</a>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
              Log in
            </button>
          </form>
        </div>

        {/* Register */}
        <div>
          <h2 className="text-xl font-bold mb-4">Create an Account</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md bg-gray-100" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md bg-gray-100" />
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md bg-gray-100" />
            <input type="text" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-md bg-gray-100" />
            <select className="w-full px-4 py-2 border rounded-md bg-gray-100">
              <option>Select your occupation</option>
              <option>Engineer</option>
              <option>Teacher</option>
              <option>Doctor</option>
            </select>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
