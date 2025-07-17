import type { JSX } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


export const EmptyCart = ():JSX.Element => {
    const navigate = useNavigate();
    return(
        <div className="sm:col-span-10">
            <div className="flex flex-col items-center justify-center h-full py-10 text-center text-gray-600">
                <PiShoppingCartLight className="sm:w-50 sm:h-50" />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="mb-4">Looks like you haven’t added anything to your cart yet.</p>
                <button onClick={() => navigate("/")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                    Start Shopping
                </button>
            </div>
        </div>
    )
}