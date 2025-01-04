import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form 
      className="min-h-[80vh] flex items-center justify-center mt-24" 
      onSubmit={onSubmitHandler}
    >
      <div className="bg-white shadow-3xl rounded-lg p-8 w-full max-w-md">
        <p className="text-2xl font-semibold text-center text-gray-800">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-sm text-center text-gray-600 mt-2">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
        </p>

        {state === "Sign Up" && (
          <div className="mt-4">
            <p className="text-sm text-gray-700">Full Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div className="mt-4">
          <p className="text-sm text-gray-700">Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-700">Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-primary text-white py-2 rounded-md text-center font-medium hover:bg-primary-dark"
        >
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {state === "Sign Up" ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-primary cursor-pointer hover:underline"
          >
            {state === "Sign Up" ? "Log In" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
