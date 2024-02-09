import React from "react";
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../components";
import { observer } from "mobx-react-lite";
import { pizzasStorage } from "../stores";

const Home = observer(({ items }) => {
  const { pizzas } = pizzasStorage;
  console.log("aaaaa", pizzas);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.length === 0
          ? Array(8)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
});

export default Home;
