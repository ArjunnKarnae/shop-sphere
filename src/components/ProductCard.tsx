import { useEffect, useRef, useState } from "react";
import type { Product } from "../types/Product";
import { useCartContext } from "../hooks/useCartContext";

export const ProductCard = ({product}: {product: Product}) => {
    const [expanded, setExpanded] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isOverFlowing, setIsOverFlowing] = useState(false);
    const { addToCart, removeFromCart } = useCartContext();

    useEffect(() => {
        const el = textRef.current;
        if(el){
            const isOverFlow = el.scrollHeight > el.clientHeight;
            setIsOverFlowing(isOverFlow);
        }
    }, []); 

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full size-90 p-2" src={product.image} alt={product.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                    <p className={`text-gray-700 text-base ${expanded ? 'line-clamp-none': 'line-clamp-3'}`} ref={textRef}>
                        {product.description}
                    </p>
                    {isOverFlowing && (
                    <button className="text-gray-700 text-base" onClick={() => setExpanded(!expanded)}>{expanded? 'Show Less..' : 'Show More..'}</button>
                    )}
                </div>
            <div className="px-6 py-4">
               
              {!product.addedToCart ? 
                <button onClick={() => {addToCart(product)}} className="bg-amber-500 hover:bg-amber-700 rounded-sm p-2 cursor-pointer">Add to Cart</button>
                :
                <button onClick={() => {removeFromCart(product)}} className="bg-amber-500 hover:bg-amber-700 rounded-sm p-2 cursor-pointer">Remove From Cart</button>
              }    
            </div>
        </div>
    );
}