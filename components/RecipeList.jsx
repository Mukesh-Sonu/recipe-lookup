import Image from "next/image";
import Link from "next/link";
import AddCart from "./AddCart";

const RecipeList = ({ meal, type }) => {
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <div className="bg-slate-400 rounded-lg m-4 overflow-hidden">
      <Image
        className="rounded-lg"
        alt="Recipe Image"
        src={`${strMealThumb}`}
        width={500}
        height={500}
      />
      <p className="text-xl mb-10 h-10 font-bold m-4">{strMeal}</p>
      <div className="flex items-center justify-itema-center justify-between m-3 ">
        <Link
          className="bg-green-500 transition duration-150 ease-in-out text-white hover:bg-green-900 px-2 py-2 rounded-lg"
          href={`/types/${type}/${idMeal}`}
        >
          View recipe
        </Link>
        <AddCart name={strMeal} />
      </div>
    </div>
  );
};

export default RecipeList;
