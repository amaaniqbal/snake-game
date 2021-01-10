import React from "react";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

function Header(props) {
  return (
    <Box>
      <Navbar
        instructionSectionScroll={props.instructionSectionScroll}
        gameSectionScroll={props.gameSectionScroll}
      />
      <Jumbotron gameSectionScroll={props.gameSectionScroll} />
    </Box>
  );
}

export default Header;
