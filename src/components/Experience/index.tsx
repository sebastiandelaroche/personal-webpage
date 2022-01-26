import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Work, WorkProps } from './Work';

import 'react-vertical-timeline-component/style.min.css';

type ExperienceProps = {
  summery: string;
  workExp: Array<WorkProps>;
};

export const Experience: React.FC<ExperienceProps> = ({
  summery,
  workExp
}) => {
  return (
    <section id='resume' className='pb-5'>
      <div className='col-md-12 mx-auto'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{ color: 'black' }}>
            <span className='text-black' style={{ textAlign: 'center' }}>
              {summery}
            </span>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <VerticalTimeline>
          {workExp.map((data, index) => (
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
