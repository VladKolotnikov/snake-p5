//make a snake that we can control with keyboard

//random food apear on screen

//snake eat food and get bigger

//if snake touches wall it dies

//if snake touches itself it dies
let snake = []
let fruit
let up= false
let down=false
let right=false
let left=false


function setup() {
  createCanvas(1000, 700)
  let body = new Snake()
  snake.push(body)
}

function draw () {
  background('black')

  snake.forEach(snake => {
    snake.show()
    if(frameCount % 5 == 0)
    snake.move()
  })
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    up=true
    down=false
    right=false
    left=false
  }
  if (keyCode === DOWN_ARROW) {
    down=true
    up=false
    right=false
    left=false
  }
  if (keyCode === RIGHT_ARROW) {
    down=false
    up=false
    right=true
    left=false

  }
  if (keyCode === LEFT_ARROW) {
    down=false
    up=false
    right=false
    left=true
  }
}


function Snake () {
  this.x = 350
  this.y = 350
  this.w = 20

  this.show= function(){
    fill('blue')
    rect(this.x, this.y, this.w, this.w)
  }
  this.move = function() {
    if (up) {
      this.y = this.y - 4
    }

    if (down) {
      this.y = this.y + 4
    }
    if (right) {
      this.x = this.x + 4
    }
    if (left) {
      this.x = this.x - 4
    }
  }
}
