export interface MealData {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

export interface MealItem extends MealData {
  quantity: number;
}
