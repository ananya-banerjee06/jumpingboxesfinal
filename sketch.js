var canvas;
var music;
var red, blue, yellow, pink, green;
var ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    blue = createSprite(0,580,360,30)
    blue.shapeColor = "blue"

    yellow = createSprite(295,580,200,30)
    yellow.shapeColor = "yellow"

    pink = createSprite(515,580,200,30)
    pink.shapeColor = "pink"

    green = createSprite(740,580,220,30)
    green.shapeColor = "green"
    
    ball = createSprite(random(20,750),100, 40,40)
    ball.shapeColor = "black"
    ball.velocityX = 4
    ball.velocityY = 9
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(blue.isTouching(ball) && ball.bounceOff(blue)){
        ball.shapeColor = "blue"
        music.play();
    }

    if(yellow.isTouching(ball)){
        ball.shapeColor = "yellow"
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(pink.isTouching(ball) && ball.bounceOff(pink)){
        ball.shapeColor = "pink"
    }

    if(green.isTouching(ball) && ball.bounceOff(green)){
        ball.shapeColor = "green";
    }

    drawSprites();
}
