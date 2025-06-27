import React, { useRef, useEffect } from 'react';

export default function PongGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Canvas dimensions
    canvas.width = 600;
    canvas.height = 400;

    // Game objects
    let paddleHeight = 60;
    const paddleWidth = 10;
    const playerY = canvas.height / 2 - paddleHeight / 2;
    let playerYPos = playerY;
    let aiYPos = playerY;
    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 8,
      speedX: 4,
      speedY: 4
    };

    // Keyboard control
    let upPressed = false;
    let downPressed = false;

    function drawRect(x, y, w, h, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    }

    function drawCircle(x, y, r, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
    }

    function drawNet() {
      for (let i = 0; i <= canvas.height; i += 15) {
        drawRect(canvas.width / 2 - 1, i, 2, 10, '#ccc');
      }
    }

    function draw() {
      // Clear canvas
      drawRect(0, 0, canvas.width, canvas.height, '#000');

      // Draw net
      drawNet();

      // Draw paddles
      drawRect(10, playerYPos, paddleWidth, paddleHeight, '#fff');
      drawRect(canvas.width - 20, aiYPos, paddleWidth, paddleHeight, '#fff');

      // Draw ball
      drawCircle(ball.x, ball.y, ball.radius, '#fff');
    }

    function update() {
      // Move player paddle
      if (upPressed && playerYPos > 0) playerYPos -= 6;
      if (downPressed && playerYPos < canvas.height - paddleHeight) playerYPos += 6;

      // Move AI paddle
      let targetY = ball.y - paddleHeight / 2;
      aiYPos += (targetY - aiYPos) * 0.08;

      // Ball movement
      ball.x += ball.speedX;
      ball.y += ball.speedY;

      // Top/bottom collision
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.speedY *= -1;
      }

      // Paddle collisions
      if (
        ball.x - ball.radius < 20 &&
        ball.y > playerYPos &&
        ball.y < playerYPos + paddleHeight
      ) {
        ball.speedX *= -1;
      }

      if (
        ball.x + ball.radius > canvas.width - 20 &&
        ball.y > aiYPos &&
        ball.y < aiYPos + paddleHeight
      ) {
        ball.speedX *= -1;
      }

      // Reset if out of bounds
      if (ball.x < 0 || ball.x > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.speedX *= -1;
        ball.speedY = 4 * (Math.random() > 0.5 ? 1 : -1);
      }
    }

    function gameLoop() {
      update();
      draw();
      requestAnimationFrame(gameLoop);
    }

    // Keyboard events
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') upPressed = true;
      if (e.key === 'ArrowDown') downPressed = true;
    });

    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowUp') upPressed = false;
      if (e.key === 'ArrowDown') downPressed = false;
    });

    gameLoop();

    return () => {
      document.removeEventListener('keydown', () => {});
      document.removeEventListener('keyup', () => {});
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h3>🎮 Pong - Usa ↑ y ↓ para jugar</h3>
      <canvas
        ref={canvasRef}
        style={{
          border: '2px solid #fff',
          backgroundColor: '#000',
          maxWidth: '100%',
        }}
      />
    </div>
  );
}
