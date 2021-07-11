var bg
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    
    catImg1 = loadAnimation("images/tomOne.png");
    catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg3 = loadAnimation("images/tomFour.png");
    mouseImg1 = loadAnimation("images/jerryOne.png");
    mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(750,650);
    cat.addAnimation("images/tomOne.png",catImg1);
    cat.scale = 0.2;

    //creating mouse sprites
    mouse = createSprite(200,650);
    mouse.addAnimation("images/jerryOne.png",mouseImg1);
    mouse.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
        {
            //changing animations for cat
            cat.addAnimation("catRunning", catImg3);
            cat.changeAnimation("catRunning");
            cat.velocityX = 0;
            //add x position of cat
            cat.x =300;
            cat.scale=0.2;
            //changing animations for mouse
            mouse.addAnimation("mouseDetective", mouseImg3);
            mouse.changeAnimation("mouseDetective");
            mouse.scale = 0.15;
}
    drawSprites();
}


function keyPressed(){
 
    if(keyCode === RIGHT_ARROW)
    {
        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25;
    
    }
    if(keyCode === LEFT_ARROW)
    {
        cat.addAnimation("Running", catImg2)
        cat.changeAnimation("Running")
        cat.velocityX = -5;
    
    }


}
