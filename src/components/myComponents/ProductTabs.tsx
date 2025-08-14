"use client";

import { useState } from "react";

interface Size {
  ageGroup: string;
  chest: number;
  fitting: string;
  kameezLength: number;
  name: string;
  paienchaWidth: number;
  shalwarLength: number;
  shoulder: number;
  sleevesLength: number;
  sleevesStyle: string;
}

export default function ProductTabs({
  size,
  features,
  collections,
}: {
  size?: Size;
  features?: any[];
  collections?: string[];
}) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Size", content: size },
    { name: "features", content: features },
    { name: "Collections", content: collections },
  ];

  return (
    <div className="mt-16">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === index
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* size */}
      <div className="py-8">
          {activeTab === 0 && (
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-yellow-600 rounded-lg shadow-sm">
                {/* Measurement Header */}
                <div className="md:col-span-2 mb-4">
                  <h3 className="text-lg font-bold text-gray-800 border-b  pb-2">
                    Measurements (in inches)
                  </h3>
                </div>

                {/* Measurements Grid */}
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
                  {/* Row 1 */}
                  <span className="font-semibold text-gray-600">Size:</span>
                  <span className="text-gray-800">{size?.name}</span>

                  <span className="font-semibold text-gray-600">
                    Age Group:
                  </span>
                  <span className="text-gray-800">{size?.ageGroup} Years</span>

                  <span className="font-semibold text-gray-600">Fitting:</span>
                  <span className="text-gray-800">{size?.fitting}</span>

                  <span className="font-semibold text-gray-600">
                    Kameez Length:
                  </span>
                  <span className="text-gray-800">{size?.kameezLength}</span>

                  <span className="font-semibold text-gray-600">Shoulder:</span>
                  <span className="text-gray-800">{size?.shoulder}</span>

                  <span className="font-semibold text-gray-600">Chest:</span>
                  <span className="text-gray-800">{size?.chest}</span>

                  {/* Row 3 */}
                  <span className="font-semibold text-gray-600">
                    Sleeves Length:
                  </span>
                  <span className="text-gray-800">{size?.sleevesLength}</span>

                  <span className="font-semibold text-gray-600">
                    Sleeves Style:
                  </span>
                  <span className="text-gray-800">{size?.sleevesStyle}</span>

                  {/* Row 4 */}

                  {/* Row 5 */}
                  <span className="font-semibold text-gray-600">
                    Shalwar Length:
                  </span>
                  <span className="text-gray-800">{size?.shalwarLength}</span>

                  <span className="font-semibold text-gray-600">
                    Paiencha Width:
                  </span>
                  <span className="text-gray-800">{size?.paienchaWidth}</span>
                </div>
              </div>
            </div>
          )}
        

        {/* features tab */}
        {activeTab === 1 && features && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
            {features.map((feature: any, index: number) => (
              <div
                key={index}
                className="group relative rounded-xl border border-yellow-500 bg-white p-5 shadow-sm hover:shadow-lg transition"
              >
                {/* Feature name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>

                {/* Feature description */}
                <p className="text-gray-600 leading-relaxed text-bold">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 2 && collections && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {collections.map((collection: any) => (
              <div
                key={collection._id}
                className="group relative rounded-xl overflow-hidden shadow-md transition hover:shadow-xl bg-white p-4"
              >
                {/* Title */}
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-base font-medium text-gray-800">
                    <a
                      href={`/collection/${collection._id}`}
                      className="hover:underline"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {collection.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
