"use client";

import dynamic from "next/dynamic";
import ContinueToShippingButton from "@/components/myComponents/continueToShippingButton"
import { useCheckoutStore } from "@/store/checkOutStore";
import { useAuth } from "@clerk/nextjs";

const OrderSummary = dynamic(
  () => import("@/components/myComponents/OrderSummary"),
  { ssr: false }
);

const InfoPage = () => {
  const { currentOrder, setUserInfo } = useCheckoutStore();
  const userInfo = currentOrder.userInfo;
  const { userId } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserInfo({ [e.target.name]: e.target.value });
  };

  // Check if all required fields are filled
  const isFormComplete = 
    userInfo.firstName.trim() &&
    userInfo.email.trim() &&
    userInfo.address.trim() &&
    userInfo.city.trim() &&
    userInfo.country.trim() &&
    userInfo.phoneNumber.trim() &&
    userInfo.paymentMethod.trim();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Checkout Information
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <form className="bg-white shadow-lg rounded-xl p-6 space-y-5">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                User Details
              </h2>

              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shipping - Address
                </label>
                <input
                  type="text"
                    name="address"
                    value={userInfo.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main St"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
              </div>

              {/* City & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={userInfo.city}
                    onChange={handleChange}
                    required
                    placeholder="Karachi"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={userInfo.country}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United States">United States</option>
                  </select>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="+92 111 1111111"
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={userInfo.paymentMethod === "Cash on Delivery"}
                      onChange={handleChange}
                      required
                    />
                    <span className="font-bold">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="text-right">
                <ContinueToShippingButton
                  name={userInfo.firstName}
                  email={userInfo.email}
                  city={userInfo.city}
                  address={userInfo.address}
                  phoneNumber={userInfo.phoneNumber}
                  disabled={!isFormComplete || !userId}
                  className={`px-4 py-2 rounded-lg ${
                    isFormComplete && userId
                      ? "bg-red-500 text-white cursor-pointer"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                />
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div>
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Order Summary
              </h2>
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
