import type { JSX } from "react";
import { useCartContext } from "../hooks/useCartContext";
import { ShoppingCartItem } from "../components/ShoppingCartItem";
import { EmptyCart } from "../components/EmptyCart";

export const Cart = (): JSX.Element => {
    const {itemsCount, productsInCart} = useCartContext();
    const totalCost = productsInCart
        .map((p) => (p.quantity > 1? p.quantity * p.price : p.price)).reduce((accumulator, p) => {return accumulator + p}, 0);
    
    const renderedCartItems = productsInCart.map((product) => {
        return <ShoppingCartItem key={product.id} product={product} />
    });
    return(
            <div className="grid p-4 sm:grid-cols-10 gap-2">
                { itemsCount > 0 ? <>
                <div className="sm:col-span-8">
                    <h3 className="font-sans text-lg font-bold m-4">Delivery Items</h3>
                    <hr className="border border-gray-200"/>
                    <br></br>
                    <div className="text-right mr-10">Price</div>
                    <hr className="border border-gray-200"/>
                    <div className="flex flex-col gap-4 m-4">  
                        {renderedCartItems}
                    </div>
                </div>
                <div className="border rounded-lg border-gray-200 mt-5 p-4 sm:col-span-2 bg-gray-700 text-white sm:h-60">
                    <p className="font-sans text-lg font-semi-bold">Delivery Total ({itemsCount} {itemsCount > 1 ? 'items':'item'}): ${totalCost.toFixed(2)}</p>
                </div>
                </> 
                : <EmptyCart />
                }
            </div>    
    );
}