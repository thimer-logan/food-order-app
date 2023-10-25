import React from "react";
import mealsImage from "../../assets/images/meals.jpg";
import HeaderButton from "../ui/HeaderButton";
import { useAppSelector } from "../../hooks/hooks";

interface HeaderProps {
  onShowCart: () => void;
}

function Header({ onShowCart }: HeaderProps) {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center p-0 px-[10%] shadow-md z-10">
        <h1 className="text-4xl font-bold">ReactMeals</h1>
        <HeaderButton
          onClick={onShowCart}
          badge={items.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
        />
      </header>
      <div className="w-full h-96 z-0 overflow-hidden">
        <img
          className="w-full h-full object-cover -rotate-[5deg] -translate-x-4 -translate-y-16"
          src={mealsImage}
          alt="meals"
        />
      </div>
    </>
  );
}

export default Header;
