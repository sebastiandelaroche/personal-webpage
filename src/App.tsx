import React from 'react';
import { useFetchPortfolioData } from './hooks/useFetchPortfolioData';
import { Header } from './components/Header';

import './App.scss';

export const App: React.FunctionComponent = () => {
  const { data } = useFetchPortfolioData();
  console.log('data', data);

  return (
    <div>
      <Header name={data?.name} titles={data?.titles} />
    </div>
  );
}
