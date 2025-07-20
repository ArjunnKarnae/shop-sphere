
import type { JSX } from "react";
import { Link } from "react-router-dom";

export const ListElement = ({name, children, handleActiveTab, isActive}: {name:string, children: JSX.Element, handleActiveTab: (name: string) => void, isActive: boolean}): JSX.Element => {
 
  const toLink = name === 'Home'? "" : name.toLowerCase();
  
  
  return(
     <li className={`${isActive? "bg-blue-200": ""} text-center text-lg sm:ml-2 sm:text-left hover:bg-blue-200 rounded-lg`}
          onClick={() => handleActiveTab(name)}>
        <Link to={toLink} className="flex items-center gap-2">{children}{name}</Link>
      </li>
  )
}