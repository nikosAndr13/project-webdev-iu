//Since we want the user to be able to like a food, the component will be rendered on the client-side
"use client";

import Image from "next/image";
import { FoodType, modalData } from "@/Types/types";
import Link from "next/link";
import x from "../assets/xmark-solid.svg";

export const FoodModal = ({ modalData }) => {
  return (
    <>
      <div className="bg-white p-6 flex justify-center shadow-2xl centerModal rounded-xl w-[250px] sm:w-[280px]">
        <div className="p-4">
          {/*close the modal logic*/}
          <Link href={"/"} scroll={false}>
            <Image
              src={x}
              alt="close modal"
              width={20}
              height={20}
              className={"absolute right-[10px] top-[10px]"}
            ></Image>
          </Link>
          <Image
            className="sm:w-[250px] rounded-xl"
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Food-Images/Healthy/${modalData.url}`}
            width={200}
            height={200}
            alt={modalData.food.Name}
          ></Image>
          <p className="text-lg sm:text-xl ">
            Calories per 100g: {modalData.food["Calories per 100g"]}
          </p>
          <p className="text-lg sm:text-xl ">
            Protein per 100g: {modalData.food["Protein(g)"]}
          </p>
          <p className="text-lg sm:text-xl ">
            Carbs per 100g: {modalData.food["Carbs (g)"]}
          </p>
          <p className="text-lg sm:text-xl ">
            Fats per 100g: {modalData.food["Fats(g)"]}
          </p>
        </div>
      </div>
    </>
  );
};
