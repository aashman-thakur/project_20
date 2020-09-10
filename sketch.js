var car, wall, speed, deformation, weight;

function setup() {
  createCanvas(1600, 400);
  wall = createSprite(1500, 200, 60, 200)
  car = createSprite(100, 200, 40, 40)

  speed = Math.round(random(55, 90))
  weight = Math.round(random(400, 1500))
car.shapeColor='white'
}

function draw() {
  background(0)
  car.velocityX = speed
  textSize(30)
  fill('white')
  text('speed:'+speed+'km/h',100,100)
  text('weight:'+weight+'kg',100,150)
  deformation=(0.5*weight*speed*speed)/22500
  drawSprites()
  if (wall.x - car.x < (wall.width + car.width) / 2) {
    car.velocityX = 0
    textSize(45)
    if(deformation>180){
      car.shapeColor=rgb(255,0,0)
      fill('red')
      text('unsafe',650,100)
    }
    if(deformation<180&&deformation>100){
      car.shapeColor=rgb(230,230,0)
    }
    if(deformation<100){
      car.shapeColor=rgb(0,255,0)
    }
  }
}