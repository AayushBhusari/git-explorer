import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const searchUser = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      if (res.status === 200) {
        navigate(`/users/user/${query}`);
      } else {
        setErrorMsg("User Not Found");
        console.error("User not found or HTTP error:", res.status);
      }
    } catch (error) {
      setErrorMsg("Error fetching user");
      console.error("Error fetching user:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setErrorMsg(""); // Clear error message when input changes
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchUser();
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      {errorMsg && <div className="text-red-500 mb-2">{errorMsg}</div>}
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search GitHub users..."
          className="w-full px-4 py-2 mr-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
