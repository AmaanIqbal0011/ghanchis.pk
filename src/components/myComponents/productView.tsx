import { Product } from "@/productsType";
import ProductGrid from "./productGrid";
import { SizeSelectorComponent } from "./sizeSelectorComponent";
import { Size } from "../../../sanity.types";



interface ProductViewProps {
  products: Product[];
}

const ProductView = ({ products}: ProductViewProps) => {
  
  return (
    <div className="flex flex-col">
      {/*Selector for Size */}
      {/* <div className="w-full sm:w-[200px] lg:px-[40] sm:px-[0]">
        <SizeSelectorComponent size={size} />
      </div> */}

      {/*products */}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
