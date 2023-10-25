import React from "react";
import { BsCartFill } from "react-icons/bs";

interface HeaderButtonProps {
  onClick: () => void;
  badge: number;
}

function HeaderButton({ onClick, badge }: HeaderButtonProps) {
  return (
    <button
      className="cursor-pointer bg-[#4d1601] text-white px-12 py-3 flex justify-around items-center rounded-3xl font-bold active:bg-[#2c0d00] hover:bg-[#2c0d00]"
      onClick={onClick}
    >
      <BsCartFill className="w-6 h-6 mr-2" />
      <span>Your Cart</span>
      <span className="bg-[#b94517] px-4 py-1 rounded-3xl ml-4 font-bold">
        {badge}
      </span>
    </button>
  );
}

export default HeaderButton;
