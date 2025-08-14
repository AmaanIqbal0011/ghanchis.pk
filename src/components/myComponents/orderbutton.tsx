import Link from "next/link";
import { Button } from "@/components/ui/button"; // assuming you're using shadcn/ui
import { PackageCheckIcon } from "lucide-react";
 
const OrderButton = () => {
  return (
    <Link href="/order-history">
      <Button variant="outline">
        <PackageCheckIcon className="w-4 h-4" />
        My Orders
      </Button>
    </Link>
  );
};

export default OrderButton;
