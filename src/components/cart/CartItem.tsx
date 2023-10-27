import React from "react";
import Button from "../ui/Button";

interface CartItemProps {
  name: string;
  quantity: number;
  price: number;
  image: string;
  onAdd: () => void;
  onRemove: () => void;
}

function CartItem({
  name,
  quantity,
  price,
  image,
  onAdd,
  onRemove,
}: CartItemProps) {
  return (
    <li className="flex justify-between items-center border-b-2 border-solid border-[#8a2b06] py-4 px-0 my-2 mx-0">
      <div className="flex items-center">
        <div className="w-36">
          <img src={image} alt={name} className="object-contain" />
        </div>
        <div className="pl-4">
          <h2 className="text-[#363636] mt-0 mr-0 mb-2 ml-0 break-words">
            {name}
          </h2>
          <div className="w-40 flex justify-between items-center">
            <span className="font-bold text-[#8a2b06]">{`$${price.toFixed(
              2
            )}`}</span>
            <span className="font-bold px-3 py-1 border-[1px] border-solid border-[#ccc] rounded-md text-[#363636]">
              {quantity}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <Button
          className="text-xl bg-transparent text-[#8a2b06] w-12 text-center rounded-md ml-4 m-1 px-0 py-0 active:text-white hover:text-white"
          onClick={onRemove}
        >
          -
        </Button>
        <Button
          className="text-xl bg-transparent text-[#8a2b06] w-12 text-center rounded-md ml-4 m-1 px-0 py-0 active:text-white hover:text-white"
          onClick={onAdd}
        >
          +
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
