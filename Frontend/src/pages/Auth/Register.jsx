import React from "react";
const Register = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
      <h2 className="text-xl font-bold text-center">Create an Account</h2>
      <input type="text" placeholder="Full Name" className="w-full px-4 py-2 bg-gray-100 border rounded" />
      <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-100 border rounded" />
      <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-gray-100 border rounded" />
      <input type="text" placeholder="Phone Number" className="w-full px-4 py-2 bg-gray-100 border rounded" />
      <select className="w-full px-4 py-2 bg-gray-100 border rounded">
        <option>Select your occupation</option>
        <option>Engineer</option>
        <option>Teacher</option>
        <option>Doctor</option>
      </select>
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
    </form>
  </div>
);

export default Register;
