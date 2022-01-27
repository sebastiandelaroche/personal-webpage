import React from 'react';
import { useTranslation } from 'react-i18next';
import { Skill } from './Skill';

import { SKILLS } from './constants';

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='skills'>
      <div className='col-md-12'>
        <div className='col-md-12'>
          <h1 className='section-title'>
            <span className='text-white'>{t('skillTitle')}</span>
          </h1>
        </div>
        <div className='col-md-12 text-center'>
          <ul className='list-inline mx-auto skill-icon'>
            {SKILLS.map(
              (skill, index) => <Skill key={`skill_${index}`} {...skill} />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
