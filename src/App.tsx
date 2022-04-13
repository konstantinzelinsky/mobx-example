import React from 'react';
import { useRoutes } from 'react-router';

import routes from './routes';

function App() {
  const routing = useRoutes(routes);

  console.log('test');

  return <div>{routing}</div>;
}

export default App;
