import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="top-1/2 left-1/2 w-4/5 text-center absolute -translate-x-1/2 -translate-y-1/2">
        <h1 className="mb-8 text-3xl font-bold text-gray">
          Explore food from around the world!
        </h1>
        <Link
          className="shadow-lg shadow-pink-500/50 py-4 px-2 bg-pink-500 hover:bg-pink-700 text-white rounded-md"
          href={"/types"}
        >
          List of Cuisines
        </Link>
      </div>
    </div>
  );
}
