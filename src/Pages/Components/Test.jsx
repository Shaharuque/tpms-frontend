import React, { useState } from "react";

const Test = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="ml-96">
      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          Hover over me
        </div>

        {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
