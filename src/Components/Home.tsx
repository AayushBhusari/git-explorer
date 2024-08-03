import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Repo {
  id: number;
  name: string;
  language: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

const Home = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const gitRepos = async () => {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=stars:>10000"
    );
    const data = await response.json();
    console.log(data.items);
    setRepos(data.items);
  };

  const gitUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    gitRepos().catch((e) => console.error(e));
    gitUsers().catch((e) => console.error(e));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to GitExplorer
        </h1>
        <p className="text-lg text-center">
          Explore popular repositories and users on GitHub. Find detailed
          information about repositories and connect with GitHub users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Repositories</h2>
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div
              className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center"
              key={repo.id}
            >
              <img
                src={repo.owner.avatar_url}
                alt="userAvatar"
                className="w-16 h-16 rounded-full mb-4"
              />
              <span className="text-lg font-semibold">{repo.name}</span>
              <span className="text-gray-600">Language: {repo.language}</span>
              <div className="text-gray-600">
                By:{" "}
                <Link
                  to={`/users/user/${repo.owner.login}`}
                  className="text-blue-500 hover:underline"
                >
                  {repo.owner.login}
                </Link>
              </div>
              <Link to={`/repo-detail/${repo.name}/${repo.owner.login}`}>
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  View Repo
                </button>
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-2xl font-semibold text-center">Loading...</h1>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub Users</h2>
        {users.length > 0 ? (
          users.map((user) => (
            <div
              className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center"
              key={user.id}
            >
              <img
                src={user.avatar_url}
                alt="userAvatar"
                className="w-16 h-16 rounded-full mb-4"
              />
              <span className="text-lg font-semibold">{user.login}</span>
              <Link to={`/users/user/${user.login}`}>
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  View Profile
                </button>
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-2xl font-semibold text-center">Loading...</h1>
        )}
      </section>

      <Link
        to="/users"
        className="block mt-4 text-blue-500 hover:underline text-center"
      >
        Go To Users Page
      </Link>
    </div>
  );
};

export default Home;
