import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { useParams } from "react-router-dom";

interface UserData {
  id: number;
  login: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
}

const User: React.FC<{ username?: string }> = () => {
  const { username } = useParams();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData: UserData = await response.json();
        setUser(userData);
        setLoading(false);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <RingLoader color={"#ffffff"} loading={loading} size={150} />
        </div>
      )}
      {user && (
        <div className="container mx-auto flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl">
          <div className="w-full flex justify-center mb-4">
            <img
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500"
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
            />
          </div>
          <div className="w-full text-center">
            <div className="font-bold text-2xl mb-2">
              {user.name || user.login}
            </div>
            <div className="text-sm mb-4">{user.bio || "No bio available"}</div>
            <div className="text-sm mb-2">
              <strong>Username:</strong> {user.login}
            </div>
            <div className="text-sm mb-2">
              <strong>Public Repositories:</strong> {user.public_repos}
            </div>
            <div className="text-sm mb-2">
              <strong>Followers:</strong> {user.followers}
            </div>
            <div className="text-sm mb-2">
              <strong>Following:</strong> {user.following}
            </div>
            <div className="mt-4">
              <a
                href={user.html_url}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
