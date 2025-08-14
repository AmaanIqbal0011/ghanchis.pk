import { Search } from "lucide-react";
import React from "react";
import Form from "next/form";

const DesktopSearchBar = () => {
  return (
    <Form
      action="/search"
      className="w-full max-w-xl mx-auto flex items-center border border-gray-300 rounded-full shadow-sm bg-white px-4 py-2 focus-within:ring-2 focus-within:ring-red-500 transition-all"
    >
      <Search className="w-5 h-5 text-gray-500 mr-3" />
      <input
        type="text"
        name="query"
        placeholder="Search for ready-made suits..."
        className="flex-1 bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
      />
    </Form>
  );
};

export default DesktopSearchBar;
