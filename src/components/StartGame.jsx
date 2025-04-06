import React from 'react'
import Dices from '../assets/dices.png'
const StartGame = ({toggle}) => {
  return (
    <div className="flex justify-center items-center gap-5 min-h-screen max-xl:flex-col bg-pink-100">
      <img src={Dices} alt="dices" height={522} width={649} />
      <div className="relative right-0 flex-flex-col ">
        <h2 className="font-bold text-8xl whitespace-nowrap font-Poppins max-sm:text-3xl">
          DICE GAME
        </h2>
        <button
          onClick={() => toggle()}
          className="absolute right-0 bg-black text-white text-lg font-medium mt-5 px-[80px] py-[15px] rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out max-sm:px-[60px] max-sm:py-[7px] whitespace-nowrap"
        >
          Play Now
        </button>
      </div>
    </div>
  );
}

export default StartGame
