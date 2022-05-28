function preload(){
    var towerImg, tower;
    var doorImg, door, doorsGroup;
    var climberImg, climber, climbersGroup;
    var ball, ballImg;
    var invisibleBlockGroup, invisibleBlock;
    var gameState = "play"
    
    function preload(){
      towerImg = loadImage("tower.png");
      doorImg = loadImage("door.png");
      climberImg = loadImage("climber.png");
      ballImg = loadImage("ball-standing.png");
      spookySound = loadSound("spooky.wav");
    
      
    }
    
    function setup() {
      createCanvas(600, 600);
      tower = createSprite(300,300);
      tower.addImage("tower",towerImg);
      tower.velocityY = 1;
    
      doorsGroup= new Group();
      climbersGroup= new Group();
      invisibleBlockGroup=new Group();
    
    
      ball=createSprite(200,200,50,50);
      ball.scale=0.3;
      ball.addImage("ball",ballImg);
    
      
    }
    
    function draw() {
      background(200);
      
      if(tower.y > 400){
          tower.y = 300
        }
        if(keyDown("left_arrow")){
          ball.x=ball.x-3;
    
        }
        if(keyDown("right_arrow")){
          ball.x=ball.x+3;
        }
        if(keyDown("space")){
          ball.velocityY=-5;
        }
        ball.velocityY=ghost.velocityY+0.8;
    
        if(climbersGroup.isTouching(ball)){
          ball.velocityY=0;
        }
    
        if(invisibleBlockGroup.isTouching(ball)||ball.y>600){
          ball.destroy();
        }
        spawnDoors();
        drawSprites();
    }
    
    function spawnDoors(){
      if(frameCount % 240===0){
        var door= createSprite(200,-50);
        door.addImage(doorImg);
    
        var climber= createSprite(200,10);
        climber.addImage(climberImg);
    
        var invisibleBlock=createSprite(200,15);
        invisibleBlock.width=climber.width;
        invisibleBlock.height=2;
    
    
    
        door.x= Math.round(random(120,400));
        door.velocityY=1;
    
        climber.x=door.x;
        climber.velocityY=1;
    
        invisibleBlock.x=door.x;
        invisibleBlock.velocityY=1;
    
       
        
        door.lifetime=800;
        climber.lifetime=800;
        
        doorsGroup.add(door);
        climbersGroup.add(climber);
    
        invisibleBlock.debug=true;
        invisibleBlockGroup.add(invisibleBlock);
    
        ball.depth=door.depth;
        ball.depth+=1;
    
    
    
      }
      
      
    }
    
}

