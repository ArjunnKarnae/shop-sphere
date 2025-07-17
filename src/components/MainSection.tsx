import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home";
import { Cart } from "../Pages/Cart";
import { Profile } from "../Pages/Profile";
import { Help } from "../Pages/Help";


export const MainSection = () => {
    return (
      <div className="shadow-md col-span-12 rounded-lg bg-gray-100 sm:col-span-10">
          <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/cart" Component={Cart}></Route>
              <Route path="/profile" Component={Profile}></Route>
              <Route path="/help" Component={Help}></Route>  
          </Routes>
        </div> 
    );
}