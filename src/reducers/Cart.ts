import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MealItem } from "../types/MealData";

interface CartState {
  items: Array<MealItem>;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MealItem>) => {
      state.totalAmount += action.payload.price * action.payload.quantity;

      const itemIndex: number = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemIndex: number = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex === -1) {
        return;
      }

      state.totalAmount -= state.items[itemIndex].price;
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = initialState.items;
      state.totalAmount = initialState.totalAmount;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
