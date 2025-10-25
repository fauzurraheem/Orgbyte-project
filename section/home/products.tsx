"use client";

import ProductCard from "@/components/ui-custom/productCard";
import SkeletonCard from "@/components/ui-custom/skeletonCard";
import { fallproducts } from "@/data/products";
import { useGetProductsQuery } from "@/redux/api/base";
import { AlertCircle, Loader2 } from "lucide-react";

function ProductsSection() {
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useGetProductsQuery(
    { limit: 3 },
    { refetchOnMountOrArgChange: true }
  );

  const displayProducts = isError || !products?.length  || products?.length  == 0 ? fallproducts : products;

  return (
    <section
      id="products"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Featured Products
        </h2>
        <p className="text-xl text-slate-600">
          Handpicked items from our verified sellers
        </p>
      </div>

      <div>
        {isLoading && (
          <>
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-3 bg-indigo-50 px-6 py-3 rounded-full">
                <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
                <span className="text-indigo-600 font-semibold">
                  Loading amazing products...
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </>
        )}

        {isError && (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 max-w-md text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Couldn’t load live products
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                Displaying featured products instead.
              </p>
              <button
                onClick={() => refetch()}
                className="bg-linear-to-r from-indigo-600 to-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {!isLoading &&
            displayProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
