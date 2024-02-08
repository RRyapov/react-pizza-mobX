import { makeAutoObservable } from "mobx";

class CategoryFilter {
  _allCategories = [
    { name: "Все", id: 0 },
    { name: "Мясные", id: 1 },
    { name: "Вегетарианская", id: 2 },
    { name: "Гриль", id: 3 },
    { name: "Острые", id: 4 },
    { name: "Закрытые", id: 5 },
  ];
  _chosenCategoryIndex = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get allCategories() {
    return this._allCategories;
  }

  get chosenCategory() {
    return this._chosenCategoryIndex;
  }

  selectChosenCategory = (id) => {
    this._chosenCategoryIndex = id;
  };
}

export const categoryFilterStorage = new CategoryFilter();
