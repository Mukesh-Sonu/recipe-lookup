"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname().split("/");
  const currentArea = pathName[2];
  const recipeId = pathName[3];

  return (
    <div className="py-5 bg-slate-200 w-full flex items-center justify-between px-2">
      <div>
        <Link href={"/"}>
          <h1 className="text-blue-700 font-bold text-5xl text-center">
            Foodie
          </h1>
        </Link>
      </div>

      {pathName && currentArea && (
        <Link href={recipeId ? `/types/${currentArea}` : `/types`}>
          <button className="bg-blue-700 px-2 py-1 text-sm md:px-6 md:py-3 rounded font-bold text-white hover:bg-blue-900 transition duration-150 ease-in-out">
            Back to {recipeId ? `${currentArea} recipe` : `recipes`}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
