import { FoodType } from "@/Types/types";

export const Input = ({ name }: FoodType) => {
  return (
    <>
      <input type="text" name={name} placeholder={name} />
    </>
  );
};
