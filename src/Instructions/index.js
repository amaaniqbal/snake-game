import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Instructions(props) {
    return (
        <Box ref={props.instructionSectionRef} my={6} py={6} style={{background: "white"}}>
          <Box textAlign="center">
            <Typography variant="h2" gutterBottom>
              Instructions
            </Typography>
            <Typography variant="subtitle1">
              Press the `Play` button to start the game. Use arrow keys up, down, left, right in order to move the snake
              in the respective directions.
            </Typography>
            <Typography variant="subtitle1">
              The game ends when the snake collides with the wall or its body.
            </Typography>
          </Box>
        </Box>
    )
}

export default Instructions;
