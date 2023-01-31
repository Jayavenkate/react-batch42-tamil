import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("crimson");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState(["crimson", "orange", "black", "orange"]);
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(event) => setColor(event.target.value)}
        value={color} />
      <button>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
