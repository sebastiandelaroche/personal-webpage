import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlagButton } from './FlagButton';

const EN_LANG = 'en';
const ES_LANG = 'es';
type Lang = typeof EN_LANG | typeof ES_LANG;

export const Languages: React.FC = () => {
  const { i18n } = useTranslation();
  const [langSelected, setLangSelected] = useState(EN_LANG);

  const clickHandle = (lang: Lang) => () => {
    if (lang === langSelected) return;
    i18n.changeLanguage(lang);
    setLangSelected(lang);
  };

  return (
    <div className='col-md-12 mx-auto text-center language'>
      <FlagButton
        onClick={clickHandle(EN_LANG)}
        flag='united-states'
        selected={langSelected === EN_LANG}
      />
      <FlagButton
        onClick={clickHandle(ES_LANG)}
        flag='colombia'
        selected={langSelected === ES_LANG}
      />
    </div>
  );
};
