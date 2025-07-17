import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

export const Header = ({toggleSidebar}: {toggleSidebar: () => void}) => {

    const { itemsCount } = useCartContext();

    return (
        <header className="sticky top-0 bg-white shadow-sm px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-4 sm:justify-start">         
                <button className="sm:hidden text-gray-700" onClick={toggleSidebar}>
                    <GiHamburgerMenu />
                </button>
                <Link to="/" className="text-lg font-bold text-gray-800 text-shadow-sm">ShopEase</Link>
            </div> 
            <div className="flex items-center space-x-4 sm:justify-end">
                <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium bg-white-100">
                    <Link to="/cart"><GiShoppingCart className="w-6 h-6" /></Link>
                    {itemsCount > 0 &&
                    (
                        <>
                        <span className="sr-only">Number of Items In Cart</span>
                        <div className="absolute inline-flex items-center justify-center w-8 h-6 text-xs font-bold text-white bg-gray-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900">{itemsCount}</div>
                        </>
                    )}
                </button>
                <Link to="/profile"><img src="https://i.pravatar.cc/30" alt="User Avatar" className="w-8 h-8 rounded-full"/></Link>
            </div>         
        </header>
    );
}