import React, { useState, useEffect, ReactElement } from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import TodosStore from 'stores/TodosStore';

const List = (): ReactElement => {
  const [todosStore] = useState(() => new TodosStore());

  const { loading, filteredTodos, showOnlyNotCompleted } = todosStore;

  useEffect(() => {
    todosStore.loadTodos();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">To-dos</h1>
      <div className="flex items-center gap-2 mb-3">
        <p>Show only not completed (changed)</p>
        <input
          type="checkbox"
          checked={showOnlyNotCompleted}
          onChange={(event) => todosStore.toggleShowOnlyNotCompleted()}
        />
      </div>
      {loading ? (
        <p>Loading... (test)</p>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              User: {todo.userId} | {todo.title}
              <input
                className="ml-2"
                type="checkbox"
                defaultChecked={todo.completed}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default observer(List);
