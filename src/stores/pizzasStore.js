import axios from "axios";

import { makeAutoObservable, reaction } from "mobx";
import { sortByStorage } from "./sortStore";
import { categoryFilterStorage } from "./categoryStore";

class PizzasStore {
  _pizzas = [];

  constructor() {
    makeAutoObservable(this);
  }

  get pizzas() {
    return this._pizzas;
  }

  setPizzas = (pizzas) => {
    this._pizzas = pizzas;
  };

  getPizzas = (category, sortBy) => {
    axios
      .get(
        `http://localhost:3001${
          category || sortBy
            ? `/pizzas?${!!category ? `category=${category}` : ""}${
                sortBy ? `&_sort=${sortBy}` : ""
              }`
            : "/pizzas"
        }`
      )
      .then(({ data }) => {
        this.setPizzas(data);
      });
  };
}

export const pizzasStorage = new PizzasStore();

reaction(
  () => categoryFilterStorage.chosenCategory,
  (v) => pizzasStorage.getPizzas(v, sortByStorage.activeSortBy)
);
reaction(
  () => sortByStorage.activeSortBy,
  (v) => pizzasStorage.getPizzas(categoryFilterStorage.chosenCategory, v)
);
