import React from 'react';
import { useTranslation } from 'react-i18next';
import { Network } from './Network';
import { NETWORKS } from './constants';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className='col-md-12'>
        <div className='social-links'>
          {NETWORKS.map(
            (network, index) => <Network key={`network_${index}`} {...network} />
          )}
        </div>
        <div className='copyright py-4 text-center'>
          <div className='container'>
            <small>
              Copyright &copy; {t('name')}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

