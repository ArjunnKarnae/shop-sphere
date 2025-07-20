import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { SideBar } from "./components/SideBar"
import { BrowserRouter } from "react-router-dom";



export const RootLayout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
   

    const toggleSidebar = () => {
       setIsOpen(!isOpen);
    }

    return (  
       
        <BrowserRouter>
            <Header toggleSidebar={toggleSidebar} />
            <div className="m-4 grid col-span-1 min-h-dvh gap-2 sm:grid-cols-12"> 
              <SideBar isOpen={isOpen} />
              <MainSection />
            </div>
            <Footer /> 
        </BrowserRouter>
      
    );
};