import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#fff" : "",
          backgroundColor: match ? "#09A2B3" : "",
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

export default CustomLink;
