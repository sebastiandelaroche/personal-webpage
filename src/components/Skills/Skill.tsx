import React from 'react';

type SkillProps = {
  name: string;
  icon: string;
  level: number;
};

export const Skill: React.FC<SkillProps> = ({
  name,
  icon,
  level
}) => (
  <li className='list-inline-item mx-3'>
    <span>
      <div className='text-center skills-tile'>
        <i className={icon} style={{ fontSize: '220%' }}>
          <p
            className='text-center'
            style={{ fontSize: '30%', marginTop: '4px' }}>
            {name}
          </p>
        </i>
      </div>
    </span>
  </li>
);
