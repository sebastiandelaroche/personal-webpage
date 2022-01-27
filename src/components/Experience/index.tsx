import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Work } from './Work';
import { WORK_EXPERIENCE } from './constants';

import 'react-vertical-timeline-component/style.min.css';

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id='resume' className='pb-5'>
      <div className='col-md-12 mx-auto'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{ color: 'black' }}>
            <span className='text-black' style={{ textAlign: 'center' }}>
              {t('experienceTitle')}
            </span>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <VerticalTimeline>
          {WORK_EXPERIENCE.map((data, index) => (
            <Work key={`work_${index}`} {...data} />
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: '#AE944F',
              color: '#fff',
              textAlign: 'center',
            }}
            icon={
              <i className='fas fa-hourglass-start mx-auto experience-icon'></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};
