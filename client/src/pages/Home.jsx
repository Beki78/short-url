import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#17153B] h-screen flex flex-col justify-center items-center ">
      <div className="shadow-md shadow-[#C8ACD6] flex flex-col justify-center items-center p-20 bg-[#211858] space-y-4 ">
        <h1 className="text-[#C8ACD6] text-3xl font-semibold">SHORT URL</h1>
        <h4 className="text-[#C8ACD6] text-xl">Enter Your URL: </h4>
        <input
          type="text"
          className="w-96 outline-[#17153B] border-none bg-[#C8ACD6] p-1 rounded-md text-[#17153B] font-semibold"
        />
        <button className="px-4 py-2 rounded-md text-[#C8ACD6] shadow-sm shadow-[#C8ACD6] hover:bg-[#433D8B] duration-150 ease-in-out bg-[#2E236C]">
          SHORTEN
        </button>
        <h3 className="text-lg text-[#C8ACD6] w-full ">
          Shorten URL: {"  "}
          <span className="text-green-400 font-bold text-base font-mono">
            kslajdlsaj
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Home
