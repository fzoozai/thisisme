import React from 'react';

interface Props {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const TechnologyItem = ({ svg: Icon, label }: Props) => (
  <div className="flex items-center font-extralight">
    <Icon />
    {label}
  </div>
);

export default TechnologyItem;
