import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (platform) => {
    alert(`Logging in with ${platform}`);
    // Implement platform-specific login logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission here
    alert(`Logging in with Email: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-2">Or login with</p>
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => handleLogin("GitHub")}
              className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all"
            >
              GitHub
            </button>
            <button
              onClick={() => handleLogin("Google")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all"
            >
              Google
            </button>
            <button
              onClick={() => handleLogin("Twitter")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all"
            >
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
