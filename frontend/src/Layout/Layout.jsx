import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-screen h-screen bg-slate-500   "> 

        <nav className="w-full h-20  bg-red-700 flex items-center justify-between px-4 md:px-28 font-bold">
          {/* <div className="font-black text-3xl ">
            <NavLink  className="text-white hover:text-gray-300">
              CRUD
            </NavLink>
          </div> */}

          <ul className="flex gap-4"> 
            <li>
              <NavLink className="text-white hover:text-stone-950 "  to="/Home">
                Home |
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-stone-950" to="/Insert">
                Insert Employee|
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-stone-950" to="/Display">
                Display |
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-stone-950" to="/Product">
                Salary Total |
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-stone-950" to="/Search">
                Search Employee |
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-stone-950" to="/Update">
                Update|
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-stone-950" to="/Contact">
                {/* Contact */}
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
