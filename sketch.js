function setup() {
    createCanvas(400, 400);
  background("purple")
  }
  function draw() {
  stroke("blu")
  fill("red")
   if(mouseIsPressed)
    rect(mouseX,mouseY,15,23);
  }