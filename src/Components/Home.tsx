import { Link } from "react-router-dom";
import Repos from "./Repos";
import Users from "./Users";

const Home = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-900">
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
        <Repos />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub Users</h2>
        <Users />
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
