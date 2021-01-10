import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Jumbotron(props) {
  return (
    <Box p={5} textAlign="center">
      <Box maxWidth={750} mx="auto">
        <Typography variant="h1" gutterBottom>
          Snake Game
        </Typography>
        <Typography variant="h3" gutterBottom>
          <p>
            Are you a fan of the classic Snake Game, seeking to play it online?
          </p>
          <p>
          You've come to right place!
          </p>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={props.gameSectionScroll}
        >
          Play Now!
        </Button>
      </Box>
    </Box>
  );
}

export default Jumbotron;
