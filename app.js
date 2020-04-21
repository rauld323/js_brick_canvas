var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2; //x and y will determine where to star on the cancas
var y = canvas.height - 30;
var dx = 1; // controls speed
var dy = -1;
var ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clearReact() cleans up the traces of the ball
  drawBall();

  //Determines when the ball should return
  // we use "-ballRadius" because we want to stop the ball the moment it touches the canvas wall
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx; // Control Speed
  y += dy;
}
//You can run function over and over using
//"setInterval"
setInterval(draw, 10);
