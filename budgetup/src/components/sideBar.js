import * as React from "react";
import "../styles/SideBar.css";
// Sidebar.js

function SideBar({show,onClose}) {
    
  return (
    
    <div className="overlay relative z-10 flex flex-col justify-center mx-auto w-full text-4xl font-semibold text-white whitespace-nowrap bg-white max-w-[480px]">
      <div className="flex flex-col py-9 w-full bg-lightBlue rounded-3xl">
        <button onClick={onClose} className="self-end mr-10">X</button>
        <div className="flex flex-col px-11 mt-28">
          <button className="pb-6">Your Dashboard</button>
          <button className="pb-6">Finance Tips</button>
          <button className="pb-6">Settings</button>
          <div className="self-center mt-[548px]">BudgetUp</div>
        </div>
      </div>
    </div>
  );
}



export default SideBar;

// function sideBar({}) {
//   return (
//     <div id="sidebar" className="flex flex-col z-3 justify-center items-start pr-16 text-4xl font-semibold text-white whitespace-nowrap bg-white max-md:pr-5">
//       <div className="flex flex-col py-9 max-w-full bg-lightBlue rounded-3xl w-[357px]">
//         <div className="self-end mr-10 max-md:mr-2.5">X</div>
//         <div className="flex flex-col px-11 mt-28 max-md:px-5 max-md:mt-10">
//           <div>Your Dashboard</div>
//           <div className="self-center mt-20 max-md:mt-10">Finance Tips</div>
//           <div className="self-start mt-16 ml-10 max-md:mt-10 max-md:ml-2.5">
//             Settings
//           </div>
//           <div className="self-center mt-[548px] max-md:mt-10">BudgetUp</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default sideBar;

