import React from 'react';

type NetworkProps = {
  url: string;
  icon: string;
};

export const Network: React.FC<NetworkProps> = ({
  url,
  icon
}) => (
  <span className='m-4'>
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <i className={icon}></i>
    </a>
  </span>
);
