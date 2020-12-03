import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const GithubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.github.com/users/fzoozai/repos?per_page=6'
      );
      // console.log('res', result.data);
      setRepos(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-4 mb-4">
      <h1 className="font-primary text-2xl pb-4 font-bold">Repositories</h1>
      <div className="flex flex-wrap justify-center">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4">
            <a href={`${repo.html_url}`}>
              <div className="box-border h-32 w-32 p-4 border-4 rounded bg-primary hover:bg-gray-400 href">
                <div className="text-base text-white font-primary">
                  {repo.name}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubRepos;
