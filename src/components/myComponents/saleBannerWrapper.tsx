import SaleBanner from "./saleBanner";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { getActiveCouponCode } from "@/sanity/lib/sales/namesOfCouponCode";


export default async function SaleBannerWrapper({ children }: { children: React.ReactNode }) {
   const coupon = await getActiveCouponCode()
  const sale = await getActiveSaleByCouponCode(coupon);
 
  // console.log(coupon)

  const bannerHeight = 56; 

  return (
    <>
      {sale?.isActive && (
        <>
          <div className="fixed top-0 left-0 right-0 z-50">
            <SaleBanner sale={sale} />
          </div>
          <div style={{ height: `${bannerHeight}px` }} />
        </>
      )}
      {children}
    </>
  );
}
