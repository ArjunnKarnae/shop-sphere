import type { JSX } from "react";
import { useGetAllProductsQuery } from "../store/productsApi";
import type { Product } from "../types/Product";
import { ProductCard } from "../components/ProductCard";
import { ImSpinner2 } from "react-icons/im";

export const Home = ():JSX.Element => {
    const { data, isLoading, isError }: {data?: Product[], isLoading: boolean, isError: boolean } = useGetAllProductsQuery();
        if(isLoading){
            return <div className="sm:col-span-10 justify-items-center"> <ImSpinner2 className="sm:w-60 sm:h-60 animate-spin fill-blue-500"/></div>
        }
        if(isError){
            return <div className="sm:col-span-10 justify-items-center"><p>Error loading Products...</p></div>
        }
        const renderedProducts = data?.map((product) => {
            return <ProductCard product={product} key={product.id} />
        })
    return(
        <div className="flex flex-wrap gap-4 m-4">
           {renderedProducts}
        </div>
    );
}