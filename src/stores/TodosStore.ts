import axios from 'axios';
import {
  observable,
  computed,
  action,
  runInAction,
  makeObservable,
} from 'mobx';

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class TodosStore {
  todos: ITodo[] = [];

  loading: boolean = false;

  showOnlyNotCompleted: boolean = false;

  constructor() {
    makeObservable(this, {
      todos: observable,
      loading: observable,
      loadTodos: action,
      showOnlyNotCompleted: observable,
      toggleShowOnlyNotCompleted: action,
      filteredTodos: computed,
    });
  }

  get filteredTodos(): ITodo[] {
    return this.showOnlyNotCompleted
      ? this.todos.filter((todo) => !todo.completed)
      : this.todos;
  }

  loadTodos = async () => {
    try {
      this.loading = true;

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );

      runInAction(() => {
        this.todos.push(response.data);
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  };

  toggleShowOnlyNotCompleted = () => {
    this.showOnlyNotCompleted = !this.showOnlyNotCompleted;
  };
}

export default TodosStore;
