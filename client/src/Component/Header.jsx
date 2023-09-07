import React from "react";
import { useCookies } from "react-cookie";
const Header = () => {
  const [cookies,setCookies, removeCookies] = useCookies(null)

  const Signout =()=>{
    removeCookies('Email')
    removeCookies('AuthToken')
    window.location.reload()
  }
  return (
    <div className="w-full">
      <div className="flex flex-row w-full justify-between py-6">
        <p></p>
        <p className="text-4xl font-semibold pl-14">To do List</p>
        <div className="pr-4">
        <button onClick={Signout} class="hover:bg-gray-100 hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded">
          Sign Out
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
