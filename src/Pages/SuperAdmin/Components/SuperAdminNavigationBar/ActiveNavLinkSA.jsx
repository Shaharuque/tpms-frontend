import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ActiveNavLinkSA({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#09A2B3" : "",
          backgroundColor: match ? "#fff" : "",
          borderRadius: match ? "2px" : "0",

          //   tex  rm: match ? "capitalize" : "none",
          //    0rddfc textTransform: match ? "capitalize" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}

export default ActiveNavLinkSA;
