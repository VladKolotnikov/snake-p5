//snake eat food and get bigger

//if snake touches wall it dies

//if snake touches itself it dies
let snake;
let tails = [];
let fruit;
let up = false;
let down = false;
let right = false;
let left = false;
let score = 0;

function setup() {
  createCanvas(1000, 700);
  snake = new Snake(500, 360);
  fruit = new Food();
}

function draw() {
  background("black");

  tails.forEach(tail => {
    tail.show();
  });

  snake.show();
  if (frameCount % 5 == 0) {
    snake.eat(fruit.x, fruit.y);
    snake.move();
    snake.dies();
  }

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

  this.dies = function() {
    if (this.y > 700 || this.x > 1000 || this.y < 0 || this.x < 0) {
      fill("red");
      text("Game Over Your Score Was " + score, 500, 350);
      noLoop();
    }
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
      let body = new Tail(this.x + 20, this.y);
      tails.push(body);
      fruit = new Food();
      score++;
      // this.grow();
    }

    function Tail(x, y) {
      this.x = x;
      this.y = y;
      this.w = 20;

      this.show = function() {
        fill("blue");
        rect(this.x, this.y, this.w, this.w);
      };
    }
  };
  // this.grow = function() {
  //   let body = new Snake(this.x - 20, this.y);
  //   snake.push(body);
  // };
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
