import { useState, useEffect } from 'react';

type PortfolioData = {
  name: string;
  titles: Array<string>;
};

export function useFetchPortfolioData() {
  const [data, setData] = useState<PortfolioData>();

  useEffect(() => {
    fetch('portfolio_data.json')
      .then(response => response.json())
      .then((data) => setData(data));
  }, []);

  return {
    data
  };
}
