import { GiShoppingCart } from "react-icons/gi";
import { GoHome, GoPerson } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { ListElement } from "./ListElement";
import { useState } from "react";


export const SideBar = ({isOpen}: {isOpen: boolean}) => {

    const [activeTab, setActiveTab] = useState<string>('');
    const handleActiveTab = (name: string) => {
        setActiveTab(name);
    }
    
     return(
    
        <aside id="sidebar" className={`${isOpen? "block": "hidden"} text-black shadow-md p-4 sm:block col-span-12 sm:rounded-lg bg-gray-50 sm:col-span-2`}>
            <ul className="space-y-4 text-lg">
              <ListElement name="Home" handleActiveTab={handleActiveTab} isActive={activeTab === 'Home'}><GoHome /></ListElement>
              <ListElement name="Cart" handleActiveTab={handleActiveTab} isActive={activeTab === 'Cart'}><GiShoppingCart /></ListElement>
              <ListElement name="Profile" handleActiveTab={handleActiveTab} isActive={activeTab === 'Profile'}><GoPerson /></ListElement>
              <ListElement name="Help" handleActiveTab={handleActiveTab} isActive={activeTab === 'Help'}><IoMdHelpCircleOutline /></ListElement>
            </ul>
        </aside>
    
    );
}

