import React, { useState } from "react";
import { motion } from "framer-motion";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-1/3 ml-20 left-3/4 w-80 bg-pink-100 rounded-lg shadow-xl overflow-hidden"
    >
      <div className="p-8 bg-pink-100">
        <h2 className="text-3xl font-bold text-pink-800 mb-6">
          {isLogin ? "Welcome Back" : "Join Us"}
        </h2>
        <form>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 mb-4 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-pink-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleForm}
            className="ml-2 font-bold text-pink-800 hover:underline focus:outline-none"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default AuthForm;
