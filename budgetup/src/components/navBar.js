import React from 'react';

function navBar(){
    return (
        <>
        <div className="flex flex-col bg-lightcolor">
          <div className="flex z-10 flex-col pb-0 w-full max-md:max-w-full">

            <div className="flex justify-center rounded-b-xl items-center py-1.0 w-full whitespace-nowrap bg-sky-600 max-md:px-5 max-md:max-w-full ">
            <div className="text-white pb-1 text-2xl font-bold">Menu</div>
              <div className="px-16">
              <div className="flex justify-between gap-3 w-full max-w-[1097px] max-md:flex-wrap max-md:max-w-full">

                <div className="flex justify-between gap-3 pb-1 items-center max-md:flex-wrap max-md:max-w-full">
                  <div className="text-white pb-1 text-2xl font-bold">BudgetUp!</div>
                </div>
                
               <div className="flex gap-5 justify-between my-auto text-xl text-black">

                <div className="grow justify-center px-4 py-3.5 bg-[linear-gradient(0deg,#F4F3EE_0%,#F4F3EE_100%),#89023E] rounded-[50px]">
                    <button
                      type="button"
                      className="bg-white text-gray-900 bg-lightcolor border border-gray-300 focus:outline-none 
              hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 
              dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
              dark:focus:ring-gray-700"
                    >
                      About
                    </button>
                  </div>

                  <div className="grow justify-center px-4 py-3.5 bg-[linear-gradient(0deg,#F4F3EE_0%,#F4F3EE_100%),#89023E] rounded-[50px]">
                    <button
                      type="button"
                      className="bg-white text-gray-900 bg-lightcolor border border-gray-300 focus:outline-none 
              hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 
              dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
              dark:focus:ring-gray-700"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="grow justify-center px-3 py-3.5 bg-[linear-gradient(0deg,#F4F3EE_0%,#F4F3EE_100%),#89023E] rounded-[50px]">
                    <button
                      type="button"
                      className="bg-white text-gray-900 bg-lightcolor border border-gray-300 focus:outline-none 
              hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 
              dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
              dark:focus:ring-gray-700"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
        </>
    );
}
export default navBar;