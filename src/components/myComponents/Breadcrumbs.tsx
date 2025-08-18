import Link from "next/link";

interface BreadcrumbsProps {
  productTitle: string;
  categories: {
    _id: string;
    name: string;
    slug: { current: string };
  }[];
}

export default function Breadcrumbs({ productTitle, categories }: BreadcrumbsProps) {
  return (
    <nav className="py-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {/* Home link */}
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>

        {/* Category links */}
        {categories?.map((category, index) => (
          <li key={category._id || index}>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href={`/category/${category.slug?.current}`}
                className="text-gray-500 hover:text-gray-700"
              >
                {category.name}
              </Link>
            </div>
          </li>
        ))}

        {/* Current product title */}
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{productTitle}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
