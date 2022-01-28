import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import javascriptIcon from '@iconify/icons-logos/javascript';

const AVATAR_URL = 'avatar_pic.jpeg';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='about'>
      <div className='col-md-12'>
        <h1 style={{ color: 'black' }}>
          <span>{t('about')}</span>
        </h1>
        <div className='row center mx-auto mb-5'>
          <div className='col-md-4 mb-5 center'>
            <div className='polaroid'>
              <span style={{ cursor: 'auto' }}>
                <img
                  height='250px'
                  style={{ maxWidth: 'none' }}
                  src={AVATAR_URL}
                  alt='Sebastian De La Roche'
                />
                <Icon
                  icon={javascriptIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={typescriptIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={nodejsIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={angularIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
              </span>
            </div>
          </div>

          <div className='col-md-8 center'>
            <div className='col-md-10'>
              <div className='card'>
                <div className='card-header'>
                  <span
                    className='iconify'
                    data-icon='emojione:red-circle'
                    data-inline='false'
                  ></span>{' '}
                  &nbsp;{' '}
                  <span
                    className='iconify'
                    data-icon='twemoji:yellow-circle'
                    data-inline='false'
                  ></span>{' '}
                  &nbsp;{' '}
                  <span
                    className='iconify'
                    data-icon='twemoji:green-circle'
                    data-inline='false'
                  ></span>
                </div>
                <div
                  className='card-body font-trebuchet text-justify ml-3 mr-3'
                  style={{
                    height: 'auto',
                    fontSize: '132%',
                    lineHeight: '200%',
                  }}
                >
                  <br />
                  <span className='wave'>{t('greeting')}</span>
                  <br />
                  <br />
                  {t('description')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
