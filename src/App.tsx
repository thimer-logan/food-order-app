import React, { useState } from "react";
import Header from "./components/layout/Header";
import { MealData } from "./types/MealData";
import MealItemList from "./components/meals/MealItemList";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/cart/Cart";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = (): void => {
    setCartVisible(true);
  };

  const hideCartHandler = (): void => {
    setCartVisible(false);
  };

  const meals: MealData[] = [
    {
      id: 381778,
      title: "Cowboy Burger",
      price: 21.12,
      imageUrl: "https://spoonacular.com/menuItemImages/hamburger.jpg",
    },
    {
      id: 321356,
      title: "99 Top a Burger, Sauteed Peppers, 2 oz",
      price: 18.79,
      imageUrl: "https://spoonacular.com/menuItemImages/hamburger.jpg",
    },
    {
      id: 227166,
      title: "Chicken Penne Pasta",
      price: 24.49,
      imageUrl:
        "https://images.spoonacular.com/file/wximages/227166-312x231.jpg",
    },
    {
      id: 353683,
      title: "Dan Dan Noodles Original w/ Steak",
      price: 25.49,
      imageUrl:
        "https://images.spoonacular.com/file/wximages/353683-312x231.jpg",
    },
    {
      id: 239036,
      title: "Penne Pasta, for Seafood Pasta Bake",
      price: 25.79,
      imageUrl: "https://spoonacular.com/menuItemImages/seafood-pasta.jpg",
    },
  ];

  return (
    <Provider store={store}>
      {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <MealItemList meals={meals} />
      </main>
    </Provider>
  );
}

export default App;
