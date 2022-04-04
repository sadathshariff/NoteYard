import "./ColorPicker.css";
import { MdColorLens } from "react-icons/md";
import { useState } from "react";
export const ColorPicker = () => {
  const [showColor, setShowColor] = useState(false);
  const colorPallete = ["#E3BEC6", "#CEAB93", "#F6D7A7", "#E7ED9B"];
  return (
    <div className="color-picker-div">
      <MdColorLens onClick={() => setShowColor((prev) => !prev)} />
      {showColor && (
        <div className="color-wrapper">
          {colorPallete.map((color) => {
            return (
              <div
                key={color}
                className="color"
                style={{ backgroundColor: `${color}` }}
                onClick={() => alert(color)}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};
