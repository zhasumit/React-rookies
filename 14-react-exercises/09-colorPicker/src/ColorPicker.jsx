import React from "react";

const ColorPicker = () => {
    const [color, setColor] = React.useState("#000000");
    const handleColorChange = (e) => setColor(e.target.value);
    return (
        <div className="container">
            <p className="colorCode">{color}</p>
            <input type="color" value={color} onChange={handleColorChange} />
            <p className="desc">Select a color</p>
        </div>
    );
};

export default ColorPicker;
