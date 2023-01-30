let creatureOne;
let player;

let buttonUp;
let buttonDown;
let buttonLeft;
let buttonRight;
let buttonContainer;

let food;

function setup() {
  //resize canvas upon eating food
  createCanvas(400, 400);
  player = new Player(10, 10, 200, 100);
  creatureOne = new Creature(30, 40, 100);
  food = new Food(round(random(50, width - 50)), round(random(50, height - 50)));
  drawGUI();
}

function draw() {
  background(0);
  player.controlMovement();
  player.screenWrap();
  creatureOne.drawCreature();
  creatureOne.followPlayer();
  player.drawPlayer();
  food.drawFood();
  creatureOne.eatFood();

  buttonUp.mousePressed(() => {
    player.yPos -= 25;
  })
  buttonDown.mousePressed(() => {
    player.yPos += 25;
  })
  buttonLeft.mousePressed(() => {
    player.xPos -= 25;
  })
  buttonRight.mousePressed(() => {
    player.xPos += 25;
  })
}

function drawGUI() {
  buttonContainer = createDiv();
  buttonUp = createButton("up").parent(buttonContainer);
  buttonDown = createButton("down").parent(buttonContainer);;
  buttonLeft = createButton("left").parent(buttonContainer);;
  buttonRight = createButton("right").parent(buttonContainer);

  buttonContainer.style("display", "flex");
  buttonContainer.style("max-width", "400px");
  buttonContainer.style("justify-content", "center");
}
