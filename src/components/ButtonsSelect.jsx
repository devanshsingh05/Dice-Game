import React from 'react'
import array from "../../index.js";


const ButtonsSelect = ({number, setNumber} ) => {
  return (
    <>
       
      {array.map((items) => (
        <button
          onClick={() => setNumber(items)}
          className={` px-4 py-4 w-[70px] border-2 rounded-xl border-black font-bold text-2xl cursor-pointer  ${
            items === number
              ? "bg-red-500 text-white transition-all duration-300 ease-in-out"
              : "bg-white text-black hover:bg-red-300 hover:text-white transition-all duration-300 ease-in-out"
          }`}
        >
          {items}
        </button>
      ))}
    </>
  );
}

export default ButtonsSelect
