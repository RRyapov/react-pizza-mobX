import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { pizzasStorage } from "./stores";
import { observer } from "mobx-react-lite";

function App() {
  const { pizzas, getPizzas } = pizzasStorage;

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas ?? []} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default observer(App);
