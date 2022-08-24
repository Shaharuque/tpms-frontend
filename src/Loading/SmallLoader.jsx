import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const SmallLoader = () => {
  return (
    <div className="h-4">
      <Box sx={{ display: "flex" }}>
        <CircularProgress sx={{ color: "teal" }} />
      </Box>
    </div>
  );
};

export default SmallLoader;
