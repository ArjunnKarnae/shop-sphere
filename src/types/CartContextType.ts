import type { Product } from "./Product";

export interface CartContextType {
    itemsCount: number;
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    productsInCart: Product[]
}