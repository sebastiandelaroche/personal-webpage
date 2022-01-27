import React from 'react';
import { Header } from './components/Header';
import { Languages } from './components/Languages';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';

import './App.scss';

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Languages />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
