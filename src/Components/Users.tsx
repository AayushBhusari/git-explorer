import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { /* Link, */ useNavigate } from "react-router-dom";

interface Users {
  id: number;
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<Users[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://api.github.com/users`);

        const jsonData: Users[] = await response.json();
        setUsers(jsonData);
        setLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
    return () => {
      console.clear();
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <RingLoader color={"#ffffff"} loading={loading} size={150} />
        </div>
      )}
      {users && (
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-bold mb-6 text-center">GitHub Users</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {users.map((user) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 flex flex-col justify-center items-center"
                key={user.id}
              >
                <div className="image w-full h-3/5 flex justify-center items-center p-5">
                  <img
                    className="w-11/12 object-cover object-center rounded-full"
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                  />
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2">{user.login}</div>
                </div>
                <div className="px-6 py-4">
                  {/* Approach using link and Link ie Dynamic routing is below*/}
                  {/* 
                  <Link to={`/users/user/${user.login}`}>See More</Link> */}
                  {/* Programatic routing is below, we use useNavigate hook */}

                  <button
                    className="bg-blue-500 px-5 py-2 rounded-md text-white"
                    onClick={() => {
                      navigate(`/users/user/${user.login}`);
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
