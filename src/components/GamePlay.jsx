import React, { useEffect } from "react";
import TotalScore from "./TotalScore";
import ButtonsSelect from "./ButtonsSelect.jsx";
import RollDice from "./RollDice.jsx";

const GamePlay = () => {

  const [number, setNumber] = React.useState("");
  const [currentDice, setCurrentDice] = React.useState("0");
  const [score, setScore] = React.useState(0);
  const [isSelected, setIsSelected] = React.useState(true);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6);
  };
  
  const rolldice = () => {
    const idx = generateRandomNumber();

    if (!number) {
      setIsSelected(false);
      return;
    }
    else setIsSelected(true);

    setCurrentDice(idx);

    if (number === idx + 1) setScore((prev) => prev + number);
    else setScore((prev) => prev - 1 - idx);
    setNumber("")
  };

  console.log("score", score);

  

  return (
    <main className="	bg-amber-100 min-h-screen py-2.5">
      <div className="flex justify-between item-cemter ">
        <TotalScore score={score} />

        <div className="relative">
          <div className="flex items-center gap-2.5 mx-3.5">
            <ButtonsSelect number={number} setNumber={setNumber} />
          </div>
          <h2 className="absolute text-2xl font-medium mt-2.5 right-10">
            {isSelected ? (
              <p className="text-black text-2xl font-medium ">
                Select from Here
              </p>
            ) : (
              <p className="text-red-800 text-2xl font-medium">
                Please Select a number first
              </p>
            )}
          </h2>
        </div>
      </div>

      <RollDice
        number = {number}
        currentDice={currentDice}
        handleClick={rolldice}
        setScore={setScore}
      />
    </main>
  );
};

export default GamePlay;
