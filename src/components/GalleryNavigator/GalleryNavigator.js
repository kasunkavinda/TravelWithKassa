import React, { useContext } from "react";
import { StateContext } from "../../context/index";

function GalleryNavigator() {
  // const [clickedButton, setClickedButton] = useContext(StateContext);
  const value = useContext(StateContext);
  return (
    <div className="m-5">
      <p>{value}</p>
      <button className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white">
        All
      </button>
      <button className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white">
        WildLife
      </button>
      <button className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white">
        Objects
      </button>
    </div>
  );
}

export default GalleryNavigator;
