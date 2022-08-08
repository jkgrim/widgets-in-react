import { useState } from "react";

export default function BoxShadow() {
  const [xAxis, setXAxis] = useState(5);
  const [yAxis, setYAxis] = useState(5);
  const [blur, setBlur] = useState(20);
  const [opacity, setOpacity] = useState(5);

  return (
    <div className="box-shadow-container">
      <div
        className="preview-box"
        style={{ boxShadow: `${xAxis}px ${yAxis}px ${blur}px ${opacity}px` }}
      >
        Preview
      </div>

      <div className="sliders-wrapper">
        <div className="range-wrapper">
          <label>X-Axis Shift: </label>
          <input
            id="x-axis"
            type="range"
            min="-50"
            max="50"
            steps="1"
            value={xAxis}
            onChange={(e) => setXAxis(e.target.value)}
          />
        </div>

        <div className="range-wrapper">
          <label>Y-Axis Shift: </label>
          <input
            id="y-axis"
            type="range"
            min="-50"
            max="50"
            steps="1"
            value={yAxis}
            onChange={(e) => setYAxis(e.target.value)}
          />
        </div>

        <div className="range-wrapper">
          <label>Blur Shift: </label>
          <input
            id="blur"
            type="range"
            min="0"
            max="100"
            steps="1"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </div>

        <div className="range-wrapper">
          <label>Opacity Shift: </label>
          <input
            id="opacity"
            type="range"
            min="0"
            max="100"
            steps="1"
            value={opacity}
            onChange={(e) => setOpacity(e.target.value)}
          />
        </div>

        <div className="output-code">
          box-shadow: ({xAxis}px {yAxis}px {blur}px {opacity}px)
        </div>
      </div>
    </div>
  );
}
