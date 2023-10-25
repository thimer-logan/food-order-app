import React from "react";
import { MealData } from "../../types/MealData";
import MealItemForm from "./MealItemForm";
import { useAppDispatch } from "../../hooks/hooks";
import { addItem } from "../../reducers/Cart";

interface MealItemProps {
  data: MealData;
}

function MealItem(props: MealItemProps) {
  const dispatch = useAppDispatch();

  const addItemHandler = (quantity: number): void => {
    dispatch(addItem({ ...props.data, quantity }));
  };

  return (
    <div className="flex flex-col w-full overflow-hidden shadow-md rounded-2xl max-w-xs mx-auto bg-white">
      <img
        className="w-full h-48 object-cover"
        src={props.data.imageUrl}
        alt={props.data.title}
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold">{props.data.title}</h3>
          <p className="text-base text-[#ad5502] font-bold">{`$${props.data.price.toFixed(
            2
          )}`}</p>
        </div>

        <MealItemForm id={props.data.id} onAddToCart={addItemHandler} />
      </div>
    </div>
  );
}

export default MealItem;
