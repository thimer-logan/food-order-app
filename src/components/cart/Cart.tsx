import React, { useState } from "react";
import Modal from "../ui/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import CartItem from "./CartItem";
import { MealItem } from "../../types/MealData";
import { addItem, clearCart, removeItem } from "../../reducers/Cart";
import Button from "../ui/Button";
import Checkout from "./Checkout";
import { CheckoutInfo } from "../../types/UserData";

interface CartProps {
  onClose: () => void;
}

function Cart({ onClose }: CartProps) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartMeals = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();

  const addItemHandler = (item: MealItem): void => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  const removeItemHandler = (id: number): void => {
    dispatch(removeItem(id));
  };

  const checkoutCancelHandler = (): void => {
    setIsCheckout(false);
  };

  const orderHandler = (): void => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (data: CheckoutInfo): void => {
    setIsSubmitting(true);

    setIsSubmitting(false);
    setDidSubmit(true);
    dispatch(clearCart());
  };

  const cartItems = (
    <ul className="list-none m-0 p-0 overflow-auto">
      {cartMeals.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          quantity={item.quantity}
          price={item.price}
          image={item.imageUrl}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="text-right">
      <Button
        className="px-8 py-2 ml-4 m-1 bg-transparent border-transparent text-[#8a2b06] hover:bg-[#ffe6dc] active:bg-[#ffe6dc]"
        onClick={onClose}
      >
        Close
      </Button>
      {cartMeals.length > 0 && (
        <Button
          className="px-8 py-2 ml-4 m-1 text-white"
          onClick={orderHandler}
        >
          Order
        </Button>
      )}
    </div>
  );

  const modalContent = (
    <>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={checkoutCancelHandler}
        />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent order !!</p>
      <div>
        <Button className="px-8 py-2 ml-4 m-1 text-white" onClick={onClose}>
          Close
        </Button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
