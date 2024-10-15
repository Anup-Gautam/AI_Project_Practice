import React from "react";
import { Button } from "@mui/material";

function Header() {
  return (
    <div className="header-container">
      <img src="/logo.svg"></img>
      <Button variant="contained">Signin</Button>
    </div>
  );
}

export default Header;
