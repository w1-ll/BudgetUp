import NavBar from '../components/navBar.js';
import * as React from "react";

function Home() {
  return (
    <div className="flex flex-col font-bold bg-white">
      <div className="flex justify-center items-center px-16 py-2.5 w-full whitespace-nowrap bg-lightBlue max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1175px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between text-4xl text-white">
            <button className="justify-center px-5 py-3 bg-lightBlue rounded-3xl border border-black border-solid shadow-sm">
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
      <div className="overflow-hidden relative flex-col justify-center items-center px-16 pt-64 pb-56 w-full text-5xl text-center text-white min-h-[698px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/911827bdeb8439f2a274425531ad2753bc464d0202961e28b432fe983b4b7ead?apiKey=00dd8100ff0f48749da2736e824a4b02&"
          className="object-cover absolute inset-0 size-full"
        />
        <div class="relative z-1 text-center">

        Plan your Budget with us and learn <br />
        more about
        <br />
        Finance Tips!
        </div>
      </div>
      <div className="items-end pt-12 pr-36 pb-4 pl-16 w-full text-xl text-white whitespace-nowrap bg-lightBlue max-md:pr-8 max-md:pl-5 max-md:max-w-full">
        GrizzHacks Project
      </div>
    </div>
  );
}




export default Home;