import React from 'react';
import { useTranslation } from 'react-i18next';

export const Languages: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <div className='col-md-12 mx-auto text-center language'>
      <div
        onClick={() => i18n.changeLanguage('en')}
        style={{ display: 'inline', margin: '1rem' }}
      >
        <span
          className='iconify language-icon mr-5'
          data-icon='twemoji-flag-for-flag-united-states'
          data-inline='false'
        ></span>
      </div>
      <div
        onClick={() => i18n.changeLanguage('es')}
        style={{ display: 'inline', margin: '1rem' }}
      >
        <span
          className='iconify language-icon'
          data-icon='twemoji-flag-for-flag-colombia'
          data-inline='false'
        ></span>
      </div>
    </div>
  );
};
