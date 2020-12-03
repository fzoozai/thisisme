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
        'https://api.github.com/users/fzoozai/repos?per_page=10'
      );
      console.log('res', result.data);
      setRepos(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>{repo.name}</div>
      ))}
    </div>
  );
};

export default GithubRepos;
