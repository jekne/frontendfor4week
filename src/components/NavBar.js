import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/loginpage">
        {" "}
        Login Page
      </NavLink>
    </div>
  );
}
