import { GiShoppingCart } from "react-icons/gi";
import { GoHome, GoPerson } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export const SideBar = ({isOpen}: {isOpen: boolean}) => {
    
    return(
    
        <aside id="sidebar" className={`${isOpen? "block": "hidden"} text-black shadow-md p-4 sm:block col-span-12 sm:rounded-lg bg-gray-50 sm:col-span-2`}>
            <ul className="space-y-4 text-lg">
              <li className="text-center text-lg sm:ml-2 sm:text-left hover:underline">
                <Link to="/" className="flex items-center gap-2"><GoHome /> Home</Link>
              </li>
              <li className="text-center text-lg sm:ml-2 sm:text-left hover:underline">
                <Link to="/cart" className="flex items-center gap-2"> <GiShoppingCart />Cart</Link>
              </li>
              <li className="text-center text-lg sm:ml-2 sm:text-left hover:underline">
                <Link to="/profile" className="flex items-center gap-2"><GoPerson /> Profile</Link>
              </li>
              <li className="text-center text-lg sm:ml-2 sm:text-left hover:underline">
                <Link to="/help" className="flex items-center gap-2"><IoMdHelpCircleOutline /> Help</Link>
              </li>
            </ul>
        </aside>
    
    );
}