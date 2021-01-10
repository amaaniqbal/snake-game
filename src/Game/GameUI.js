import React, { useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PlayCircleOutlineSharpIcon from "@material-ui/icons/PlayCircleOutlineSharp";

function GameUI() {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const canvasBorder = "black";
  const canvasBackground = "white";
  const snakeColor = "lightblue";
  const snakeBorder = "darkblue";

  let highScore = 0;

  useEffect(() => {
    const canvasContext = canvasRef.current.getContext("2d");
    const canvasContainerContext = canvasContainerRef.current;

    canvasContext.canvas.width = canvasContainerContext.offsetWidth;
    canvasContext.canvas.height = canvasContainerContext.offsetHeight;
  }, []);

  const handlePlayGameButton = () => {
    let snake = [{ x: 200, y: 200 }];

    let score = 0;
    let isDirectionChanging = false;

    // Food Locations
    let foodX;
    let foodY;

    // Initial Movement
    let dx = 10;
    let dy = 0;

    // Canvas Element
    const snakeBoard = document.getElementById("snakeboard");
    // 2D Drawing Context
    const snakeBoardContext = snakeBoard.getContext("2d");

    // Start Game
    main();
    generateFood();
    document.getElementById("score").innerHTML = 0;
    document.addEventListener("keydown", changeDirection);

    function main() {
      if (hasGameEnded()) {
        highScore = Math.max(highScore, score);
        document.getElementById("high-score").innerHTML = highScore;

        return;
      }

      isDirectionChanging = false;

      setTimeout(function onTick() {
        clearBoard();
        drawFood();
        moveSnake();
        drawSnake();

        // Repeat
        main();
      }, 100);
    }

    function clearBoard() {
      snakeBoardContext.fillStyle = canvasBackground;
      snakeBoardContext.strokestyle = canvasBorder;
      snakeBoardContext.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
      snakeBoardContext.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
    }

    function drawSnake() {
      snake.forEach(drawSnakePart);
    }

    function drawFood() {
      snakeBoardContext.fillStyle = "lightgreen";
      snakeBoardContext.strokestyle = "darkgreen";
      snakeBoardContext.fillRect(foodX, foodY, 10, 10);
      snakeBoardContext.strokeRect(foodX, foodY, 10, 10);
    }

    function drawSnakePart(snakePart) {
      snakeBoardContext.fillStyle = snakeColor;
      snakeBoardContext.strokestyle = snakeBorder;
      snakeBoardContext.fillRect(snakePart.x, snakePart.y, 10, 10);
      snakeBoardContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function hasGameEnded() {
      for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
      }

      const hitLeftWall = snake[0].x < 0;
      const hitRightWall = snake[0].x > snakeBoard.width - 10;
      const hitToptWall = snake[0].y < 0;
      const hitBottomWall = snake[0].y > snakeBoard.height - 10;

      return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
    }

    function getRandomNumber(min, max) {
      return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    }

    function generateFood() {
      foodX = getRandomNumber(0, snakeBoard.width - 10);
      foodY = getRandomNumber(0, snakeBoard.height - 10);

      // Generate new food location if current location coincides with the snake's location
      snake.forEach((part) => {
        if (part.x === foodX && part.y === foodY) generateFood();
      });
    }

    function changeDirection(event) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;

      // Prevent Multiple Movements
      if (isDirectionChanging) return;

      isDirectionChanging = true;
      const keyPressed = event.keyCode;
      const goingUp = dy === -10;
      const goingDown = dy === 10;
      const goingRight = dx === 10;
      const goingLeft = dx === -10;

      if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
      }

      if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
      }

      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
      }

      if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
      }
    }

    function moveSnake() {
      // Create New Snake head
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      // Append New Head
      snake.unshift(head);

      // Check if Snake Consumed a Food
      if (snake[0].x === foodX && snake[0].y === foodY) {
        // Increase Score
        score += 10;
        // Display Updated Score
        document.getElementById("score").innerHTML = score;
        // Generate New Food
        generateFood();
      } else {
        // Pop Last Part of Snake
        snake.pop();
      }
    }
  };

  return (
    <Box p={1}>
      <Container maxWidth="md">
        <Box display="flex" my={2}>
          <Box mr={2}>
            Score: <span id="score">0</span>
          </Box>
          <Box flexGrow={1}>
            High Score: <span id="high-score">0</span>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePlayGameButton}
              endIcon={<PlayCircleOutlineSharpIcon />}
            >
              Play
            </Button>
          </Box>
        </Box>

        <Box ref={canvasContainerRef} boxShadow={3} height="60vh" mx="auto">
          <canvas ref={canvasRef} id="snakeboard"></canvas>
        </Box>
      </Container>
    </Box>
  );
}

export default GameUI;
