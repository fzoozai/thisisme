import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
  id: number;
  name: string;
}

const GithubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.github.com/users/fzoozai/repos?per_page=6'
      );
      console.log('res', result.data);
      setRepos(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {repos.map((repo) => (
        <div key={repo.id} className="p-4">
          <div className="box-border h-32 w-32 p-4 border-4">
            <div className="text-xs">{repo.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GithubRepos;
