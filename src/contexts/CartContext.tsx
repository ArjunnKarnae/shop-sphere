import {createContext, useState, type ReactNode } from "react";
import type { CartContextType } from "../types/CartContextType";
import type { Product } from "../types/Product";

const initialCartContextState: CartContextType = {
    itemsCount: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    productsInCart: []
}
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType>(initialCartContextState);

export const CartContextProvider = ({children}: {children: ReactNode}) => {
    const [itemsCount, setItemsCount] = useState(0);
    const [productsInCart, setProductsInCart] = useState<Product[]>([]);

    const addToCart = (productToAdd: Product) => {
        setItemsCount(prev => prev + 1);
        setProductsInCart((prevCart) => {
            const existingProduct = prevCart.find(p => p.id === productToAdd.id);
            if(existingProduct){
                return prevCart.map(p => p.id === existingProduct.id ? {...p, quantity: (p.quantity || 1) + 1}: p);
            }else{
                const updatedProduct: Product = {...productToAdd, addedToCart: true, quantity: 1};
                return[...productsInCart, updatedProduct];
            }
        });   
    }

    const removeFromCart = (productToRemove: Product) => {
        setItemsCount(prev => prev - 1);
        setProductsInCart((prevCart) => {
            const existingProduct = prevCart.find(p => p.id === productToRemove.id);
            if(existingProduct && existingProduct.quantity > 1){
                return prevCart.map(p => (p.id === productToRemove.id)? {...p, quantity: (p.quantity || 1) - 1 }: p);
            }else{
                const updatedProduct: Product = {...productToRemove, addedToCart: false, quantity: 0};
                const filteredProducts = productsInCart.filter(p => p.id !== updatedProduct.id);
                return filteredProducts;
            }
        });
    }
 
    return (
        <CartContext.Provider value= { {itemsCount, addToCart, removeFromCart, productsInCart} }>
            {children}
        </CartContext.Provider>);
}


