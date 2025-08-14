import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, UserButton, ClerkLoaded } from "@clerk/nextjs";
import { Button } from "../ui/button";
import CartButton from "./cartButton";
import OrderButton from "./orderbutton";
import MobileSearchBar from "./mobileSearchBar";
import DesktopSearchBar from "./desktopSearchBar";
import GhanchisLogo from "./ghanchisLogo";


const Header = async () => {
  const user = await currentUser();
 
  return (
    <header className="bg-white shadow-sm sticky top-0 inset-x-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="sm:hidden py-4">
          <div className="flex justify-center mb-4 sticky top-0 inset-x-0 z-50">
            <GhanchisLogo />
          </div>

          <MobileSearchBar />

          <div className="flex flex-wrap justify-between items-center gap-1 mt-3 px-1">
         
            <CartButton />
            {user && <OrderButton />}
            <ClerkLoaded>
              {user ? (
                <div className="flex items-center space-x-2">
                  <UserButton
                    appearance={{
                      elements: { userButtonAvatarBox: "w-8 h-8" },
                    }}
                  />
                </div>
              ) : (
                <SignInButton mode="modal">
                  <Button size="sm" variant="outline">
                    Sign In
                  </Button>
                </SignInButton>
              )}
            </ClerkLoaded>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between h-16 ">
          <div className="flex flex-1">
            <GhanchisLogo />
          </div>

          <div className="flex-3 flex justify-center">
            <DesktopSearchBar />
          </div>

         
          <div className="flex flex-1 justify-end items-center space-x-4">
         
            <CartButton />
            {user && <OrderButton />}
            <ClerkLoaded>
              {user ? (
                <div className="flex items-center space-x-2">
                  <UserButton
                    appearance={{
                      elements: { userButtonAvatarBox: "w-8 h-8" },
                    }}
                  />
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-700">
                      {user.fullName}
                    </p>
                  </div>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
              )}
            </ClerkLoaded>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300" />
      <div>
 
      </div>
     
    </header>
  );
};

export default Header;
