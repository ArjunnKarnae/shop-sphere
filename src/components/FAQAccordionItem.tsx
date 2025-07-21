import { useState, type JSX } from "react";
import type { FAQ } from "../types/FAQ";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";


export const FaqAccordionItem = ({item}: {item: FAQ}) : JSX.Element => {

  const [expanded, setExpanded] = useState(false);
    
  return (
         <>
          <h2 className={`${expanded ? "bg-blue-100 text-blue-600": ""}`}>
            <button type="button" onClick={() => setExpanded(!expanded)}
              className={`${expanded && "rounded-t-xl"} flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-100 gap-3`}
              >
              <span>{item.id}. {item.question}</span>
              {expanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </h2>
          <div className={`${expanded? "" : "hidden"}`}>
            <div className="p-5 border border-b-0 border-gray-200 bg-white">
              <p className="mb-2 text-gray-500">{item.answer}</p>
            </div>
          </div>
        
       </>
    );
}




