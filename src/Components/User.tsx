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
}

const User: React.FC<{ username?: string }> = () => {
  const { userName } = useParams();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
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
  }, [userName]);

  return (
    <div className="bg-gray-900 text-white">
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <RingLoader color={"#ffffff"} loading={loading} size={150} />
        </div>
      )}
      {user && (
        <div className="container mx-auto py-10">
          <div className="max-w-md rounded overflow-hidden shadow-lg bg-gray-800">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {user.name || user.login}
              </div>
              <div className="text-sm mb-2">
                {user.bio || "No bio available"}
              </div>
              <p className="text-sm mb-2">Username: {user.login}</p>
              <p className="text-sm mb-2">
                Public Repositories: {user.public_repos}
              </p>
              <p className="text-sm mb-2">Followers: {user.followers}</p>
              <p className="text-sm mb-2">Following: {user.following}</p>
            </div>
            <div className="px-6 py-4">
              <a
                href={user.html_url}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out"
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
