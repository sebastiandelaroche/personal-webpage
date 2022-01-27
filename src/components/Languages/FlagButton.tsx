import React from 'react';

type FlagButtonProps = {
  onClick: () => void;
  flag: string;
  selected: boolean;
};

export const FlagButton: React.FC<FlagButtonProps> = ({
  onClick,
  flag,
  selected
}) => {
  const selectedStyle = selected ? { filter: 'brightness(0.5)' } : {};
  return (
    <div
      onClick={onClick}
      style={{ display: 'inline', margin: '1rem', ...selectedStyle }}>
      <span
        className='iconify language-icon'
        data-icon={`twemoji-flag-for-flag-${flag}`}
        data-inline='false'></span>
    </div>
  );
};
