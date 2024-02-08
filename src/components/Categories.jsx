import React from "react";
import { observer } from "mobx-react-lite";
import { categoryFilterStorage } from "../stores";

const Categories = () => {
  const { allCategories, chosenCategory, selectChosenCategory } =
    categoryFilterStorage;
  return (
    <div className="categories">
      <ul>
        {allCategories &&
          allCategories.map(({ name, id }) => (
            <li
              className={chosenCategory === id ? "active" : ""}
              onClick={() => selectChosenCategory(id)}
              key={`${name}_${id}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default observer(Categories);
