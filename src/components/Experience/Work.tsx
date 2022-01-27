import React from 'react';
import { Badge } from 'react-bootstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type TechProps = {
  name: string;
  isMain?: boolean;
}

export const Tech: React.FC<TechProps> = ({ name, isMain = false }) => (
  <Badge pill className={`${isMain ? 'main-badge': 'experience-badge'} mr-2 mb-2`}>
    {name}
  </Badge>
);

export type WorkProps = {
  title: string;
  years: string;
  company: string;
  technologies: Array<{
    name: string;
    isMain: boolean;
  }>
};

export const Work: React.FC<WorkProps> = ({
  title,
  years,
  company,
  technologies
}) => {
  const techs = technologies.filter(({ isMain }) => !isMain);
  const mainTechs = technologies.filter(({ isMain }) => isMain);

  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      date={years}
      iconStyle={{
        background: '#AE944F',
        color: '#fff',
        textAlign: 'center',
      }}
      // icon={<i className='fab fa-angular experience-icon'></i>}
      icon={<img width={50} src='coding.png'/>}
    >
      <div style={{ textAlign: 'left', marginBottom: '4px' }}>
        {mainTechs.map(({ name }, index) => (
          <Tech
            key={`main_tech_${index}`}
            name={name}
            isMain={true} />
        ))}
      </div>
      <h3
        className='vertical-timeline-element-title'
        style={{ textAlign: 'left' }}
      >
        {title}
      </h3>
      <h4
        className='vertical-timeline-element-subtitle'
        style={{ textAlign: 'left' }}
      >
        {company}
      </h4>
      <div style={{ textAlign: 'left', marginTop: '15px' }}>
        {techs.map(({ name }, index) =>
          <Tech
            key={`tech_${index}`}
            name={name} />
        )}
      </div>
    </VerticalTimelineElement>
  );
};
