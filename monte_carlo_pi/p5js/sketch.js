let totalPoints = 0;
let insideCircle = 0;

function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    totalPoints++;
    let d = dist(x, y, width/2, height/2);
    if (d < width/2) {
      insideCircle++;
      fill(255, 0, 150); // Vibrant pink color for points inside circle
    } else {
      fill(0, 255, 255); // Vibrant cyan color for points outside circle
    }
    noStroke();
    ellipse(x, y, 5, 5);
  }

  let piApprox = 4 * (insideCircle / totalPoints);
  let error = abs(PI - piApprox);

  fill(0);
  text(`Approximation of π: ${piApprox}`, 10, 20);
  text(`Error: ${error}`, 10, 40);
}

