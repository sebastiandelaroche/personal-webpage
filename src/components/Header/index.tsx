import React, { useState } from 'react';
import Typical from 'react-typical';
import Switch from 'react-switch';

type HeaderProps = {
  name?: string;
  titles?: Array<string>;
};

export const Header: React.FC<HeaderProps> = ({ name, titles = [] }) => {
  const [isChecked, setIsChecked] = useState(false);
  const stepTitles = titles.map(title => [title.toUpperCase(), 1500]).flat();

  const onThemeSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    setTheme();
  }

  // TODO: this method doesn't have good practices, please change it.
  const setTheme = () => {
    const dataThemeAttribute = 'data-theme';
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
      body.setAttribute(dataThemeAttribute, newTheme);
  }

  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className='title-styles' steps={stepTitles} loop={50} />
  }, (props, prevProp) => true);

    return (
      <header id='home' style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className='row aligner' style={{height: '100%'}}>
          <div className='col-md-12'>
            <div>
              <span className='iconify header-icon' data-icon='la:laptop-code' data-inline='false'></span>
              <br/>
              <h1 className='mb-0'>
                <Typical steps={[name]} wrapper='p' />
              </h1>
              <div className='title-container'>
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={isChecked}
                onChange={onThemeSwitchChange}
                offColor='#baaa80'
                onColor='#353535'
                className='react-switch mx-auto'
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className='iconify'
                    data-icon='twemoji:owl'
                    data-inline='false'
                    style={{
                      display: 'block',
                      height: '100%',
                      fontSize: 25,
                      textAlign: 'end',
                      marginLeft: '20px',
                      color: '#353239',
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className='iconify'
                    data-icon='noto-v1:sun-with-face'
                    data-inline='false'
                    style={{
                      display: 'block',
                      height: '100%',
                      fontSize: 25,
                      textAlign: 'end',
                      marginLeft: '10px',
                      color: '#353239',
                    }}
                  ></span>
                }
                id='icon-switch'
              />
            </div>
          </div>
        </div>
      </header>
    );
  };
