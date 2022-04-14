import React from 'react';
import { useRoutes } from 'react-router';

import routes from './routes';

const App = () => {
  const routing = useRoutes(routes);

  console.log('tes');

  return <div>{routing}</div>;
};

export default App;
