import { Product } from "@/productsType";
import ProductGrid from "./productGrid";
import { Size } from "../../../sanity.types";
import { SizeSelectorComponent } from "./sizeSelectorComponent";



interface ProductViewProps {
  products: Product[];
  size: Size[];
}

const ProductView = ({ products, size }: ProductViewProps) => {
  
  return (
    <div className="flex flex-col">
      {/*Selector for Size */}
      <div className="w-full sm:w-[200px] lg:px-[40] sm:px-[0]">
        <SizeSelectorComponent size={size} />
      </div>

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
