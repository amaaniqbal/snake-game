import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import GameUI from "./GameUI";

function Game(props) {
  return (
    <Box ref={props.gameSectionRef} my={4} py={4} textAlign="center">
      <Typography variant="h2" gutterBottom>
        Snake Game
      </Typography>
      <GameUI />
    </Box>
  );
}

export default Game;
