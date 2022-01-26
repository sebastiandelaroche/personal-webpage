import React from 'react';
import { Header } from './components/Header';
import { Languages } from './components/Languages';

import './App.scss';

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Languages />
    </div>
  );
}
