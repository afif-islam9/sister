const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createHeart() {
  return {
    x: random(0, canvas.width),
    y: canvas.height + 20,
    size: random(10, 30),
    speed: random(1, 3),
    alpha: random(0.5, 1),
    color: `rgba(255, 105, 180, ${random(0.4, 0.8)})`
  };
}

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 30, size / 30);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -15, -15);
  ctx.bezierCurveTo(-35, -15, -35, 10, -35, 10);
  ctx.bezierCurveTo(-35, 25, -20, 40, 0, 50);
  ctx.bezierCurveTo(20, 40, 35, 25, 35, 10);
  ctx.bezierCurveTo(35, 10, 35, -15, 15, -15);
  ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach((heart, index) => {
    heart.y -= heart.speed;
    drawHeart(heart.x, heart.y, heart.size, heart.color);
    if (heart.y + heart.size < 0) {
      hearts[index] = createHeart();
    }
  });

  requestAnimationFrame(animate);
}

for (let i = 0; i < 30; i++) {
  hearts.push(createHeart());
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
