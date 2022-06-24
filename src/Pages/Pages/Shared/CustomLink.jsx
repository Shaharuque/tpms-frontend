import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#09A2B3" : "",
          textDecoration: match ? "underline" : "none",
          //   textTransform: match ? "capitalize" : "none",
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
