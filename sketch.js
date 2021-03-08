var balloon;
var backG;
var database;
var position;
function preload(){
  bla = loadImage("B2.png");
  bg = loadImage("B1.png");
}

function setup() {
  database = firebase.database();
  var balloonPosition = database.ref("balloon/position");
      balloonPosition.on("value", readPosition, showError);
  createCanvas(1430,690);
  
   
  balloon = createSprite(500, 500, 20, 20);
  balloon.addImage(bla);
  balloon.scale=0.8;



 



 
  
}
function draw() {
  background(bg);
  textSize(24);
  fill("blue");
  text("**Use arrow keys to move Hot Air Balloon!", 10, 40);
  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0)
}
else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
}
else if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
balloon.scale = balloon.scale -0.01;
}
else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10);
}


drawSprites();
}

function readPosition(data){
position = data.val();
balloon.x = position.x;
balloon.y = position.y;
console.log(position.x)
}
function showError(){
console.log("error");
}
function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x':position.x+x,
    'y':position.y+y})
}
