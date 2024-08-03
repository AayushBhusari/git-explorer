import React, { useEffect, useState } from "react";
import Repo from "./Repo";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repos: React.FC = () => {
  const [data, setData] = useState<Repository[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.items); // Accessing the items property
        console.log(jsonData.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {data && (
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-bold mb-6 text-center" id="hello">
            Github Repos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {data.map((repo) => (
              <Repo
                key={repo.id}
                id={repo.id}
                name={repo.name}
                html_url={repo.html_url}
                description={repo.description}
                owner={repo.owner}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Repos;
