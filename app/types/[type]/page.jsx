import React from "react";
import RecipeList from "@/components/RecipeList";
import { fetchAreas } from "../page";

export const getRecipes = async (area) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = res.json();
  return data;
};

export const generateStaticParams = async () => {
  const data = await fetchAreas();
  return data.map((area) => ({
    type: area,
  }));
};

const Area = async ({ params }) => {
  const { meals } = await getRecipes(params.type);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5">
      {meals &&
        meals?.map((meal) => (
          <RecipeList key={meal?.idMeal} meal={meal} type={params.type} />
        ))}
    </div>
  );
};

export default Area;
