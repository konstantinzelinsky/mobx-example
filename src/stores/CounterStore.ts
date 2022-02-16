import { observable, action, computed, makeObservable } from 'mobx';

class CounterStore {
  counter: number = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,
      setCounter: action,
      doubled: computed
    });
  }

  get doubled(): number {
    return this.counter * 2;
  }

  setCounter = (value: number) => {
    this.counter = value;
  };
}

const counterStore = new CounterStore();

export default counterStore;
