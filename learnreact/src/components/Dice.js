import React from "react";

function Dice() {
  return (
    <div>
      <h1> Dice Roll </h1>
      <div>
        <lable>How Many Dice?</lable>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
}

export default Dice;
