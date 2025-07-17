import { AiOutlineDelete } from "react-icons/ai";
import type { Product } from "../types/Product"
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { useCartContext } from "../hooks/useCartContext";
import { useState } from "react";

export const ShoppingCartItem = ({product}: {product:Product}) => {
    const {addToCart, removeFromCart} = useCartContext();
    const [productDisplayPrice, setProductDisplayPrice] = useState(() => {
        if(product.quantity && product.quantity > 0){
            return product.price * product.quantity;
        }else{
            return product.price;
        }
        });

    const handleIncreaseItemCount = (product: Product) => {
        setProductDisplayPrice((prevPrice) => prevPrice + product.price);
        addToCart(product);
    } 

    const handleDecreaseItemCount = (product: Product) => {
        setProductDisplayPrice((prevPrice) => +(prevPrice - product.price).toFixed(2));
        removeFromCart(product);
    }

    return (
            <div className="flex items-center justify-between w-full rounded overflow-hidden shadow-lg px-5">
                <div className="flex-shrink-0">
                    <img className="size-30 p-2" src={product.image} alt={product.title} />
                    
                    <div className="flex items-center justify-center p-2">
                        
                        <button id="decrement-btn"
                            onClick={() => handleDecreaseItemCount(product)}
                            className="cursor-pointer rounded-sm flex justify-center items-center w-5 h-5 text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
                        {product.quantity > 1 ? <HiMinusSm /> : <AiOutlineDelete /> }
                        </button>
                       
                        <span id="counter" className="text-xl font-bold mx-4">{product.quantity || 1}</span>
                        <button id="increment-btn"
                            onClick={() => handleIncreaseItemCount(product)}
                            className="cursor-pointer rounded-sm flex justify-center items-center w-5 h-5 text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
                            <HiPlusSm />
                        </button>
                    </div>
                </div>
                <div className="flex-grow px-4">
                    {product.title}
                </div>
                <div className="text-right mr-5">
                    ${productDisplayPrice.toFixed(2)}
                </div>
            </div>
    );
}