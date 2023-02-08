import Image from "next/image";

const getRecipesbyId = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();
  return data;
};

const AboutRecipe = async ({ params }) => {
  const recipeDetails = await getRecipesbyId(params.id);
  const details =
    recipeDetails && recipeDetails.meals ? recipeDetails.meals[0] : {};

  // filters out the falsy values..
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ing) => details[ing])
    .filter(Boolean);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-9">
      <div className="place-self-center">
        <Image
          className="rounded-lg"
          src={`${details.strMealThumb}`}
          width={500}
          height={500}
          alt="RecipeDetail"
        />
      </div>

      <div className="place-self-center">
        <h1>
          Recipe Name:{" "}
          <span className="text-2xl font-bold">{details.strMeal}</span>
        </h1>
        <div className="mt-3">
          <p>Ingredients List: </p>
          {ingredients.map((val, idx) => (
            <span
              key={idx}
              className="bg-blue-500 rounded inline-block px-2 py-1 mr-2 mb-2"
            >
              {val}
            </span>
          ))}
        </div>
        {details.strYoutube && (
          <div className="mt-3">
            <p>Video Link:</p>
            <a
              className="text-blue-500"
              target={"_blank"}
              href={`${details.strYoutube}`}
            >
              How to make {details.strMeal}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutRecipe;
