import React,{useState} from "react";
import Sidebar from "./sideBar.js"


function NavBar(){
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const noShow=()=>{
    setSidebarVisible(false)
  }
    return (
        <>
        <div className="z-10">
        {sidebarVisible && <Sidebar show={sidebarVisible} onClose={noShow}/>}
        </div>
        
        <div className="flex flex-col font-bold bg-white">

        <div className="flex justify-center items-center px-16 py-2.5 w-full whitespace-nowrap bg-lightBlue max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1175px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between text-4xl text-white">
            <button onClick={toggleSidebar} className="justify-center px-5 py-3 bg-lightBlue rounded-3xl border border-black border-solid shadow-sm">
              ☰
            </button>
            <div className="flex-auto my-auto">BudgetUp</div>
          </div>
          
          <div className="flex gap-5 justify-between items-start my-auto text-xl text-black max-md:flex-wrap">
            <button className="grow justify-center px-9 py-2 bg-white rounded-3xl max-md:px-5">
              About
            </button>
            <button className="grow justify-center px-8 py-2 bg-white rounded-3xl max-md:px-5">
              Sign in
            </button>
            <button className="grow justify-center self-stretch px-7 py-2 bg-white rounded-3xl max-md:px-5">
              Sign up
            </button>
          </div>
        </div>
      </div>
      </div>
        </>
    );
}
export default NavBar;