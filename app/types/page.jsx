import Link from "next/link";

export const fetchAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const data = await res.json();
  return data.meals.map((a) => a.strArea);
};

const Types = async () => {
  const areas = await fetchAreas();

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 py-5 h-screen px-5">
      {areas.map((strArea) => (
        <div>
          <Link
            className="py-6 px-3 text-center rounded-md bg-slate-400 hover:bg-slate-900 text-white block text-2xl shadow-pink-500/50 font-bold"
            href={`/types/${strArea}`}
          >
            {strArea}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Types;
