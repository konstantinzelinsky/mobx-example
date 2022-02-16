import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import { Outlet, NavLink } from 'react-router-dom';

// Stores
import counterStore from 'stores/CounterStore';

const MainLayout = (): ReactElement => {
  const { counter } = counterStore;

  return (
    <div>
      <div className="flex items-center p-5 bg-yellow-200 rounded-b-lg">
        <nav className="flex gap-x-5 flex-auto">
          <NavLink
            to="/counter"
            className="hover:underline"
            activeClassName="text-blue-500 bg-bl"
          >
            Counter
          </NavLink>
          <NavLink
            to="/list"
            className="hover:underline"
            activeClassName="text-blue-500"
          >
            List
          </NavLink>
        </nav>
        <div>This is current counter State: {counter}</div>
      </div>
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default observer(MainLayout);
