var player;
var score=0;
var wormGroup;


function setup() {
  createCanvas(600,600);
 player=createSprite(40,550,30,30)
 wormGroup=new Group();
}

function draw() {
  background("black");
  stroke("cyan"); 
  noFill(); 
  ellipse(100,350,40,30);
  player.x=mouseX;
  player.y=mouseY;
  generateWorms();
  for(var i=0;i<(wormGroup).length;i++)
  {
    var temp=(wormGroup).get(i);
    if (player.isTouching(temp))
    {
      score++;
      temp.destroy();
      temp=null;
    }
  }
drawSprites();
textSize(20);
text("Worms Destroyed "+ score,350,50)
}
function generateWorms()
{
  if(frameCount %30==0)
  {
    var worm=createSprite(100,350,40,5);
    worm.shapeColor="green";
    worm.velocityX=random(-4,4);
    worm.velocityY=random(-4,4);
    wormGroup.add(worm);
  }
}