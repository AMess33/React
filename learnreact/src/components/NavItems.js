import React from "react";

function NavItems({ currentPage, handlePageChange }) {
  return (
    <div className="navBar">
      <ul className="">
        <li className="">
          <a
            href="#Randomizer"
            onClick={() => handlePageChange("Randomizer")}
            className={
              currentPage === "Randomizer" ? "nav-link active" : "nav-link"
            }
          >
            Randomizer
          </a>
        </li>
        <li className="">
          <a
            href="#DiceRoller"
            onClick={() => handlePageChange("DiceRoller")}
            className={
              currentPage === "DiceRoller" ? "nav-link active" : "nav-link"
            }
          >
            Dice Roll
          </a>
        </li>
        <li className="">
          <a
            href="#ToDo"
            onClick={() => handlePageChange("ToDo")}
            className={currentPage === "ToDo" ? "nav-link active" : "nav-link"}
          >
            To Do List
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;
