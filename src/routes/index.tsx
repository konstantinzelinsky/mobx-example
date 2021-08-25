import React from 'react';
import { Navigate } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import Counter from './Counter';
import List from './List';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/counter" />, exact: true },
      { path: 'counter', element: <Counter /> },
      { path: 'list', element: <List /> },
    ],
  },
];

export default routes;
