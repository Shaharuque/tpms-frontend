import { useState } from "react";

const StateUse = (i) => {
  const [open, setOpen] = useState(i);
  console.log(open);
  return { open, setOpen };
};

export default StateUse;
