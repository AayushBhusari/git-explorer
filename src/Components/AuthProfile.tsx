import React, { useEffect, useState } from "react";

interface GitHubUserData {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  company: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  html_url: string;
  bio: string;
}

interface Props {
  username: string;
}

const AuthProfile: React.FC<Props> = ({ username }) => {
  const [gitUserData, setGitUserData] = useState<GitHubUserData | null>(null);

  useEffect(() => {
    const getGitUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData: GitHubUserData = await response.json();
        setGitUserData(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getGitUser();
  }, [username]);

  if (!gitUserData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl mb-4">YOUR PROFILE</h2>
      <div className="flex items-center mb-8">
        <img
          src={gitUserData.avatar_url}
          className="w-20 h-20 rounded-full mr-4"
          alt="user-img"
        />
        <div>
          <span className="block text-xl font-bold">{gitUserData.login}</span>
          <h2 className="text-lg">{gitUserData.name}</h2>
          <div className="mt-2">
            <span className="block text-gray-400">
              Company:{" "}
              <span className="font-bold text-purple-500">
                {gitUserData.company}
              </span>
            </span>
            <span className="block">
              Public Repos: {gitUserData.public_repos}
            </span>
          </div>
          <h3 className="mt-2">{gitUserData.location}</h3>
          <div className="flex mt-2">
            <span className="mr-4">Followers: {gitUserData.followers}</span>
            <span>Following: {gitUserData.following}</span>
          </div>
          <a
            href={gitUserData.html_url}
            target="_blank"
            rel="noreferrer"
            className="block mt-4 text-blue-500 hover:text-blue-600"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-lg">{gitUserData.bio}</h3>
      </div>
    </div>
  );
};

export default AuthProfile;
