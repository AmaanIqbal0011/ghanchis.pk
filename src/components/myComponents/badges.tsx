"use client";

import { Button } from "../ui/button";

export default function Badges({
  sizes,
  ageGroup,
  collections,
  category,
}: {
  sizes: any;
  ageGroup: string[];  // <-- updated to array
  collections: string;
  category: string;
}) {
  if (!sizes) return null;

  return (
    <div className="mt-8 flex flex-nowrap items-center gap-3 overflow-x-auto no-scrollbar">
      {/* Size */}
      <div className="flex flex-col items-center">
        <h3 className="text-xs font-medium text-gray-900">Size</h3>
        <Button
          variant="outline"
          className="mt-1 py-2 px-4 text-sm font-medium"
        >
          {sizes.name}
        </Button>
      </div>

      {/* Age */}
      <div className="flex flex-col items-center">
        <h3 className="text-xs font-medium text-gray-900">Age</h3>
        <Button
          variant="outline"
          className="mt-1 py-2 px-4 text-sm font-medium"
        >
          {ageGroup && ageGroup.length > 0 ? ageGroup.join(", ") : "N/A"}
        </Button>
      </div>

      {/* Collections */}
      <div className="flex flex-col items-center">
        <h3 className="text-xs font-medium text-gray-900">Collection</h3>
        <Button
          variant="outline"
          className="mt-1 py-2 px-4 text-sm font-medium"
        >
          {collections}
        </Button>
      </div>

      {/* Category */}
      <div className="flex flex-col items-center">
        <h3 className="text-xs font-medium text-gray-900">Category</h3>
        <Button
          variant="outline"
          className="mt-1 py-2 px-4 text-sm font-medium"
        >
          {category}
        </Button>
      </div>
    </div>
  );
}
