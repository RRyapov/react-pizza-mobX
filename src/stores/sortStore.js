import { makeAutoObservable } from "mobx";

class SortBy {
  _sortItems = [
    { name: "популярности", type: "popular" },
    { name: "алфавиту", type: "name" },
    { name: "цене", type: "price" },
  ];
  _activeSortBy = "popular";
  _visiblePopup = false;

  constructor() {
    makeAutoObservable(this);
  }

  get sortItems() {
    return this._sortItems;
  }

  get activeSortBy() {
    return this._activeSortBy;
  }

  get visiblePopup() {
    return this._visiblePopup;
  }

  makeVisiblePopup = () => {
    this._visiblePopup = !this._visiblePopup;
  };
  setVisiblePopup = (v) => {
    this._visiblePopup = v;
  };

  setActiveSortBy = (type) => {
    this._activeSortBy = type;
    this.makeVisiblePopup();
  };
}

export const sortByStorage = new SortBy();
