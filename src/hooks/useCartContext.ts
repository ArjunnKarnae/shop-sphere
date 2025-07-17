import { useContext } from "react";
import type { CartContextType } from "../types/CartContextType";
import { CartContext } from "../contexts/CartContext";

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error("Cart context is undefined");
    }
    return context;
}