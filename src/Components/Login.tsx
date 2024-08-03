import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<Props> = ({ setIsLogged, setUsername }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // NAVIGATION
  const navigate = useNavigate();

  const dummyUserObject = {
    username: "BhusariAayush",
    password: "MB",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginUsername === dummyUserObject.username &&
      password === dummyUserObject.password
    ) {
      setUsername(loginUsername);
      setIsLogged(true);
      navigate("/authProfile");
    } else {
      setErrorMsg("Invalid Credentials");
    }
  };

  return (
    <form
      className="max-w-sm mx-auto bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white"
      onSubmit={handleLogin}
    >
      <span className="block text-red-500 text-sm mb-4">{errorMsg}</span>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-400 text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          value={loginUsername}
          onChange={(e) => {
            setLoginUsername(e.target.value);
            setErrorMsg("");
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-400 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMsg("");
          }}
          placeholder="Password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
