"use client";

import React from "react";
import { Search } from "lucide-react";

const MobileSearchBar = () => {
  return (
    <form
      action="/search"
      className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus-within:ring-1 focus-within:ring-red-500 w-full"
    >
      <Search className="w-5 h-5 text-gray-500" />
      <input
        name="query"
        type="text"
        placeholder="Search for ready-made suits..."
        className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800 placeholder:text-gray-400"
      />
    </form>
  );
};

export default MobileSearchBar;
