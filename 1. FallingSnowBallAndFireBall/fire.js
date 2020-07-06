(() => {
  function setup() {
    const canvas = document.getElementById("fire");
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfFireBalls: 250,
    };
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createFireBalls(canvas, numberOfFireBalls) {
    return [...Array(numberOfFireBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4),
        speedX: random(-5, 5),
        speedY: random(1, 3),
      };
    });
  }

  function drawSnowBall(canvasContext, fireBall) {
    canvasContext.beginPath();
    canvasContext.arc(fireBall.x, fireBall.y, fireBall.radius, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255,0,0,${fireBall.opacity})`;
    canvasContext.fill();
  }

  function moveSnowBall(canvas, fireBall) {
    fireBall.x += fireBall.speedX;
    fireBall.y += fireBall.speedY;
    if (fireBall.x > canvas.width) {
      fireBall.x = 0;
    } else if (fireBall.x < 0) {
      fireBall.x = canvas.width;
    }

    if (fireBall.y > canvas.height) {
      fireBall.y = 0;
    }
  }

  function run() {
    const { canvas, canvasContext, numberOfFireBalls } = setup();
    const fireBalls = createFireBalls(canvas, numberOfFireBalls);
    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      fireBalls.forEach((fireBall) => drawSnowBall(canvasContext, fireBall));
      fireBalls.forEach((fireBall) => moveSnowBall(canvas, fireBall));
    }, 20);
  }
  run();
})();
