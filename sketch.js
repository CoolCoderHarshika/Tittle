var ball;
var database,position
var form1;
var playerCount=0

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    form1=new Form()
    
}
function draw(){
    background("white");
    //drawSprites();
    form1.display()
}

