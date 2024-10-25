"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

export const FoodCard = ({ data }) => {
  const [search, setSearch] = useState<string>("");

  //we filter the data to show the search results
  const filteredData = data.filter(
    (index) =>
      index.food.Name.toLowerCase().includes(search) ||
      index.food.Name.toUpperCase().includes(search)
  );
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-[80vw] border-2 p-4 rounded-xl sm:w-[80vw] lg:w-[40vw]"
        />
      </div>
      <div className="flex flex-wrap gap-4 object-cover justify-center">
        {filteredData?.map((image) => (
          <Fragment key={image.food.Name}>
            <Link href={`/?food=${image.food.id}`} scroll={false}>
              <Image
                className="aspect-[3/3] object-cover scale-[0.8] hover:scale-[1] hover:ease-in-out duration-300 cursor-pointer rounded-xl shadow-xl"
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Food-Images/Healthy/${image.url}`}
                alt={image.food.Name}
                width={200}
                height={200}
              />
            </Link>
          </Fragment>
        ))}
      </div>
    </>
  );
};
