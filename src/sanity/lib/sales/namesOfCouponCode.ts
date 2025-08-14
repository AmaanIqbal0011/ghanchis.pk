// /lib/sales/getActiveCouponCode.ts
import { client } from "../client";

export async function getActiveCouponCode(): Promise<string | null> {
  const data = await client.fetch(
    `*[_type == "sale" && isActive == true][0].couponCode`
  );
  return data || null;
}
