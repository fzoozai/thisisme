import TechnologyItem from '../components/TechnologyItem';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as TailwindIcon } from '../icons/tailwind.svg';
import { ReactComponent as NodeIcon } from '../icons/node.svg';
import { ReactComponent as DockerIcon } from '../icons/docker.svg';

const frontendItems = [
  {
    svg: ReactIcon,
    label: 'React JS'
  },
  {
    svg: TailwindIcon,
    label: 'Tailwind CSS'
  }
];

const backendItems = [
  {
    svg: NodeIcon,
    label: 'Node JS'
  }
];

const devopsItems = [
  {
    svg: DockerIcon,
    label: 'Docker'
  }
];

const TechnologyOverview = () => (
  <div className="flex flex-col flex-wrap items-center pb-8 pt-4">
    <h1 className="font-primary text-2xl pb-4 font-bold">
      Technologies in use
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-primary-1">
      <div className="px-4 pb-2">
        <h2 className="font-primary text-lg font-bold border-b-2">Frontend</h2>
        {frontendItems.map((item) => (
          <TechnologyItem key={item.label} svg={item.svg} label={item.label} />
        ))}
      </div>
      <div className="px-4 pb-2">
        <h2 className="font-primary text-lg font-bold border-b-2">Backend</h2>
        <div className="flex items-center">
          {backendItems.map((item) => (
            <TechnologyItem
              key={item.label}
              svg={item.svg}
              label={item.label}
            />
          ))}
        </div>
      </div>
      <div className="px-4">
        <h2 className="font-primary text-lg font-bold border-b-2">Devops</h2>
        <div className="flex items-center">
          {devopsItems.map((item) => (
            <TechnologyItem
              key={item.label}
              svg={item.svg}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TechnologyOverview;
