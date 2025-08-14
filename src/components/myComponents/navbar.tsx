
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavbarData } from "../../../constants/navbar";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (itemName: string) => {
    setOpenDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <nav className="bg-white border-t border-gray-200 z-30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex flex-nowrap space-x-5" ref={dropdownRef}>
            {NavbarData.map((item) => {
              const showDropdown = openDropdown === item.name;

              return (
                <div key={item.name} className="relative flex-shrink-0">
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        handleToggle(item.name);
                      } else {
                        setOpenDropdown(null);
                      }
                    }}
                    className={`flex items-center ${
                      item.highlight
                        ? "text-red-600 hover:text-red-700"
                        : "text-gray-700 hover:text-red-600"
                    } transition-colors text-sm font-medium`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDownIcon className="w-4 h-4 ml-1 -mr-1" />
                    )}
                  </button>

                  {item.dropdown && showDropdown && (
                    <div className="absolute z-20 mt-3 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg">
                      <div className="p-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
};
