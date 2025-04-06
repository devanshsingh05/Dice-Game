import React from 'react'
import imgarr from "../assets/images/index.js";

const RollDice = ({currentDice, handleClick, setScore, number}) => {
  const [showRules, setShowRules] = React.useState(false);

  const [rotation, setRotation] = React.useState(0);

  const handleRotate = () => {
    handleClick();
    if (!number) return;
    setRotation(rotation + 360); // Rotate by 360° on each click
  };
  
  return (
    <div className="mx-auto flex items-center justify-center gap-7 2xl:relative max-2xl:flex-col">
      <div className="flex flex-col justify-center items-center gap-5 mt-[100px]">
        <img
          className="transition-transform duration-700"
          src={imgarr[currentDice]}
          style={{ transform: `rotate(${rotation}deg)` }}
          alt="img"
          onClick={handleRotate}
        />
        <h2 className="mt-2 text-2xl font-medium">Click on Dice to roll</h2>

        <button
          onClick={() => setScore(0)}
          className="w-[200px] bg-white px-4 py-3 text-xl font-medium border-2 border-black rounded-xl
        hover:bg-red-400 hover:border-red-400 hover:text-white transition-all duration-300 ease-in-out "
        >
          Reset Score
        </button>
        <button
          onClick={() => setShowRules(!showRules)}
          className="w-[200px] bg-black text-white px-4 py-3 text-xl font-medium  rounded-xl"
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </div>
      {showRules && (
        <div className="w-[500px] bg-[#FBF1F1] text-black px-4 py-3 text-xl font-medium  rounded-xl flex flex-col gap-2 2xl:absolute 2xl:right-10 2xl:top-25">
          <p className="text-red-400 text-3xl">Rules</p>
          <p className="text-gray-800">1. Select a number from 1 to 6</p>
          <p className="text-gray-800">2. Click on the dice to roll</p>
          <p className="text-gray-800">
            3. If the rolled number matches your selected number, you gain
            points equal to your selected number.
          </p>
          <p className="text-gray-800">
            4. If not, you lose points equal to the rolled number.
          </p>
        </div>
      )}
    </div>
  );
}

export default RollDice
