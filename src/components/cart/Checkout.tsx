import React from "react";
import { CheckoutInfo } from "../../types/UserData";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../ui/Button";

interface CheckoutProps {
  onConfirm: (data: CheckoutInfo) => void;
  onCancel: () => void;
}

function Checkout({ onConfirm, onCancel }: CheckoutProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckoutInfo>();
  const onSubmit: SubmitHandler<CheckoutInfo> = (data) => onConfirm(data);

  const labelStyle: string = "font-bold mb-1 block";
  const labelStyleInvalid: string = "text-[#ca3e51]";
  const inputStyle: string =
    "border-2 border-solid border-[#ccc] rounded w-80 max-w-full";
  const inputStyleInvalid: string = "border-[#aa0b20] bg-[#ffeff1]";

  return (
    <form className="my-4 mx-0 h-72" onSubmit={handleSubmit(onSubmit)}>
      <div className={`mb-2 `}>
        <label
          htmlFor="name"
          className={`${labelStyle} ${errors.name && labelStyleInvalid}`}
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          className={`${inputStyle} ${errors.name && inputStyleInvalid}`}
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label
          htmlFor="street"
          className={`${labelStyle} ${errors.street && labelStyleInvalid}`}
        >
          Street
        </label>
        <input
          id="street"
          type="text"
          className={`${inputStyle} ${errors.street && inputStyleInvalid}`}
          {...register("street", { required: true })}
        />
      </div>
      <div>
        <label
          htmlFor="postal"
          className={`${labelStyle} ${errors.postalCode && labelStyleInvalid}`}
        >
          Postal Code
        </label>
        <input
          id="postal"
          type="text"
          className={`${inputStyle} ${errors.postalCode && inputStyleInvalid}`}
          {...register("postalCode", { required: true })}
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className={`${labelStyle} ${errors.city && labelStyleInvalid}`}
        >
          City
        </label>
        <input
          id="city"
          type="text"
          className={`${inputStyle} ${errors.city && inputStyleInvalid}`}
          {...register("city", { required: true })}
        />
      </div>
      <div className="flex justify-end gap-4 pb-2">
        <Button
          className="px-8 py-2 bg-transparent border-transparent hover:bg-[#ffe6dc] active:bg-[#ffe6dc]"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button className="px-8 py-2 text-white">Submit</Button>
      </div>
    </form>
  );
}

export default Checkout;
