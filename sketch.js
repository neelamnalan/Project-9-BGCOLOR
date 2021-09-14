var a=b=c=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() 
{
  
  
    background(a,b,c);
  

}
function keyPressed(){
  
  if(keyIsDown(DOWN_ARROW)){
    a=Math.round(random(0,255));
    b=Math.round(random(0,255));
    c=Math.round(random(0,255));
    console.log(a,b,c)
  }
}

