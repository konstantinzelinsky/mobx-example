import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import counterStore from 'stores/CounterStore';

const Counter = (): ReactElement => {
  const { doubled, counter } = counterStore;

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Counter</h1>
      <button
        type="button"
        className="bg-blue-300 pl-1 pr-1 rounded mr-2"
        onClick={() => counterStore.setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        type="button"
        className="bg-blue-300 pl-1 pr-1 rounded"
        onClick={() => counterStore.setCounter(counter - 1)}
      >
        Decrement
      </button>
      <p>Doubled сounter: {doubled}</p>
    </div>
  );
};

export default observer(Counter);
