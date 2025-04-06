import React from 'react'

const TotalScore = ({score}) => {

  return (
    <div className="mx-4">
      <p className="font-bold text-6xl">{score}</p>
      <p className="text-lg font-medium">Total Score</p>
    </div>
  );
}

export default TotalScore
