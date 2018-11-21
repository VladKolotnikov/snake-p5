//make a snake that we can control with keyboard

//random food apear on screen

//snake eat food and get bigger

//if snake touches wall it dies

//if snake touches itself it dies
let snake = [];
let fruit;
let up = false;
let down = false;
let right = false;
let left = false;
let score = 0;

function setup() {
  createCanvas(1000, 700);
  let body = new Snake(360, 360);
  snake.push(body);
  fruit = new Food();
}

function draw() {
  background("black");
  snake.forEach(snake => {
    snake.show();
    if (frameCount % 5 == 0) {
      snake.eat(fruit.x, fruit.y);
      snake.move();
    }
  });
  fruit.show();

  textSize(20);
  text(score + " points", 10, 30);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up = true;
    down = false;
    right = false;
    left = false;
  }
  if (keyCode === DOWN_ARROW) {
    down = true;
    up = false;
    right = false;
    left = false;
  }
  if (keyCode === RIGHT_ARROW) {
    down = false;
    up = false;
    right = true;
    left = false;
  }
  if (keyCode === LEFT_ARROW) {
    down = false;
    up = false;
    right = false;
    left = true;
  }
}

function Snake(x, y) {
  this.x = x;
  this.y = y;
  this.w = 20;

  this.show = function() {
    fill("blue");
    rect(this.x, this.y, this.w, this.w);
  };
  this.move = function() {
    if (up) {
      this.y = this.y - 20;
    }

    if (down) {
      this.y = this.y + 20;
    }
    if (right) {
      this.x = this.x + 20;
    }
    if (left) {
      this.x = this.x - 20;
    }
  };
  this.eat = function(x, y) {
    if (this.x == x && this.y == y) {
      fruit = new Food();
      score++;
      this.grow();
    }
  };
  this.grow = function() {
    let body = new Snake(this.x - 20, this.y);
    snake.push(body);
  };
}
function Food() {
  this.x = Math.floor(random(0, 49)) * 20;
  this.y = Math.floor(random(0, 34)) * 20;
  this.w = 20;
  this.show = function() {
    fill("red");
    rect(this.x, this.y, this.w, this.w);
  };
}
