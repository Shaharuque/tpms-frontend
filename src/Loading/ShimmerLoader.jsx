import React from "react";
import { ShimmerTable } from "react-shimmer-effects";

const ShimmerLoader = () => {
  return (
    <div>
      <ShimmerTable size="sm" line={5} gap={2} row={5} col={9} />
    </div>
  );
};

export default ShimmerLoader;
