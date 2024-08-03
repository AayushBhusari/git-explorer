import React, { useEffect, useState } from "react";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  languages_used: string;
  description: string;
  owner: {
    login: string;
  };
}

const Repos: React.FC = () => {
  const [data, setData] = useState<Repository[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repositories`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData: Repository[] = await response.json();
        setData(jsonData);
        console.log(jsonData);
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
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 flex flex-col"
                key={repo.id}
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{repo.name}</div>
                  <div
                    className="description text-sm mb-4 overflow-hidden"
                    style={{ maxHeight: "6rem" }}
                  >
                    {repo.description || "No description available"}
                  </div>
                  <p className="text-sm">Author: {repo.owner.login}</p>
                </div>
                <div className="px-6 py-4 ">
                  <a
                    href={repo.html_url}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Repos;
