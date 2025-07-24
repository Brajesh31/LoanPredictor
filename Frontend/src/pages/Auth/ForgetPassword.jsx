import React
 from "react";


 const ForgotPassword = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
      <h2 className="text-xl font-bold text-center">Forgot your password?</h2>
      <p className="text-sm text-center text-gray-500">Enter the email address associated with your account</p>
      <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-100 border rounded" />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Reset Password</button>
      <div className="text-center text-sm mt-2">
        <a href="/login" className="text-blue-600">Remember your password? Sign in</a>
      </div>
    </form>
  </div>
);

export default ForgotPassword;
