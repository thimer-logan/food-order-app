import React, { FormEvent, useRef } from "react";
import Button from "../ui/Button";

interface MealItemFormProps {
  id: number;
  onAddToCart: (quantity: number) => void;
}

function MealItemForm(props: MealItemFormProps) {
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();

    if (quantityInputRef.current) {
      props.onAddToCart(parseInt(quantityInputRef.current.value));
    }
  };

  return (
    <form
      className="text-right flex flex-col items-end"
      onSubmit={submitHandler}
    >
      <div className="flex items-center mb-2">
        <label className="text-sm font-bold mr-4" htmlFor={props.id.toString()}>
          Quantity
        </label>
        <input
          className="w-12 pl-2 rounded-md border-2 border-solid border-[#ccc]"
          ref={quantityInputRef}
          {...{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>
      <Button className="text-white px-8 py-1">+ Add</Button>
    </form>
  );
}

export default MealItemForm;
