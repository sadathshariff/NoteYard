import "./ColorPicker.css";
import { MdColorLens } from "react-icons/md";
import { useState } from "react";
export const ColorPicker = ({ changeColor }) => {
  const [showColor, setShowColor] = useState(false);
  const colorPallete = [
    "#E3BEC6",
    "#E193FD",
    "#F6D7A7",
    "#AF9EB5",
    "#E7ED9B",
    "#9DB5B2",
  ];
  return (
    <div className="color-picker-div">
      <MdColorLens
        size={25}
        className="note-footer-icon"
        onClick={() => setShowColor((prev) => !prev)}
      />
      
      {showColor && (
        <div className="color-wrapper">
          {colorPallete.map((color) => {
            return (
              <div
                key={color}
                className="color"
                style={{ backgroundColor: `${color}` }}
                onClick={() => changeColor(color)}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};
