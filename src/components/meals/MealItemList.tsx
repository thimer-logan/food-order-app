import React from "react";
import { MealData } from "../../types/MealData";
import MealItem from "./MealItem";

interface MealItemListProps {
  meals: MealData[];
}

function MealItemList({ meals }: MealItemListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {meals.map((meal: MealData) => (
        <MealItem key={meal.id} data={meal} />
      ))}
    </div>
  );
}

export default MealItemList;
