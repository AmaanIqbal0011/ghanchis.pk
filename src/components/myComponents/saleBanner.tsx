import React from "react";

interface SaleBannerProps {
  sale: {
    title?: string;
    discountAmount?: number;
    couponCode?: string;
    validFrom?: string;
    validUntil?: string;
    isActive?: boolean;
  };
}

function SaleBanner({ sale }: SaleBannerProps) {
  if (!sale?.isActive) return null;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const validFrom = formatDate(sale.validFrom);
  const validUntil = formatDate(sale.validUntil);

  return (
    <div className="bg-gradient-to-r from-red-700 to-red-900 border-b border-red-800 shadow-md py-2">
      <div className="mx-auto px-3 max-w-full sm:max-w-7xl flex flex-wrap items-center justify-between gap-2 overflow-hidden">
        {/* Left section - discount badges */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {sale.discountAmount && (
            <div className="bg-yellow-400 text-red-900 font-bold py-0.5 px-2 rounded text-xs whitespace-nowrap">
              {sale.discountAmount}% OFF
            </div>
          )}
          <div className="bg-black/20 px-2 py-0.5 rounded whitespace-nowrap">
            <span className="text-yellow-300 text-xs font-semibold tracking-wider">
              USE Code: {sale.couponCode}
            </span>
          </div>
        </div>

        {/* Middle section - sale title (now more prominent) */}
        <div className="min-w-0 mx-2 flex-1">
          <h3 className="text-white text-sm sm:text-base font-bold tracking-wide truncate relative before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-yellow-300 before:rounded-full after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:bg-yellow-300 after:rounded-full">
            {sale.title}
          </h3>
        </div>

        {/* Right section - date range and CTA */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {(validFrom || validUntil) && (
            <div className="hidden md:flex items-center text-xs text-yellow-100 bg-black/20 px-2 py-0.5 rounded whitespace-nowrap">
              {validFrom && <span>From: {validFrom}</span>}
              {validUntil && (
                <span className="ml-1">
                  {validFrom ? "to" : "Until"} {validUntil}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center gap-2">
            {sale.couponCode && (
              <div className="hidden xs:flex items-center bg-black/20 px-2 py-0.5 rounded whitespace-nowrap">
                <span className="text-yellow-300 mr-1 text-xs">Use code:</span>
                <code className="font-mono font-bold text-white text-xs tracking-wider">
                  {sale.couponCode}
                </code>
              </div>
            )}
            <button className="hidden sm:block bg-white text-red-700 text-xs font-bold py-1 px-2.5 rounded whitespace-nowrap hover:bg-yellow-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;