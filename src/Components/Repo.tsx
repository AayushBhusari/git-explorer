import React from "react";

interface RepoProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repo: React.FC<RepoProps> = ({
  id,
  name,
  html_url,
  description,
  owner,
}) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 flex flex-col"
      key={id}
    >
      <div className="px-6 py-4">
        <img
          src={owner.avatar_url}
          alt="userAvatar"
          className="w-16 h-16 rounded-full mb-4"
        />
        <div className="font-bold text-xl mb-2">{name}</div>
        <div
          className="description text-sm mb-4 overflow-hidden"
          style={{ maxHeight: "6rem" }}
        >
          {description || "No description available"}
        </div>
        <p className="text-sm">Author: {owner.login}</p>
      </div>
      <div className="px-6 py-4 ">
        <a
          href={html_url}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default Repo;
