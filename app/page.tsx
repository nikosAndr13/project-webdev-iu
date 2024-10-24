import { FoodModal } from "@/components/FoodModal";
import { createClient } from "../utils/supabase/server";
import { FoodCard } from "@/components/FoodCard";

type SearchParamPros = {
  searchParams: Record<string, string> | null | undefined;
};

//All the data is being fetched server-side
export default async function Home({ searchParams }: SearchParamPros) {
  const supabase = createClient();
  const foodId = searchParams?.food;

  //fetch the necessary data with get request
  let { data, error } = await supabase.from("images").select(
    `url, food:foods(id, "Calories per 100g", Name, "Protein(g)", "Carbs (g)", "Fats(g)")
    `
  );

  /* find the correct food to pass as a modal based on the id, which we 
  get from the url as a search parameter */
  const modalData = data?.find((item) => item.food.id == foodId);

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className=" w-[100vw] h-[100vh]">
          <div className="flex flex-col justify-center items-center h-[15vh]">
            <h1 className="text-[2.5rem] text-center z-10 font-bold md:text-[3rem]">
              Welcome to HealthyLife
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-10">
            {/*Generate the images in the frontpage */}
            <FoodCard data={data} />
            <br />
            <div
              className={`${
                foodId
                  ? "fixed top-0 bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-75 z-20"
                  : ""
              }`}
            >
              {/*Conditionally render the modal with the correct food data
              and pass the correct data via props*/}
              {foodId && <FoodModal modalData={modalData} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
