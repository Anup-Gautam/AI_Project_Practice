import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <h1>
        AI Travel Lads: <span>Travelling with Lads Using AI</span>
      </h1>

      <p>
        This will be your personal travel experience with the people you call
        lads. So, tell me lads, Where we going to?
      </p>
      <Link to="/create-trip">
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            margin: "20px",
          }}
          variant="contained"
        >
          {" "}
          LET US GO LADS
        </Button>
      </Link>
    </div>
  );
}

export default Hero;
