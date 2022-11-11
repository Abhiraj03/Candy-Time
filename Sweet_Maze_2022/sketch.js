var mainMenuBack, lvlMenuBack, scoresMenuBack;
var maze1Back, maze2Back, maze3Back, maze4Back, maze5Back;
var candyImg;
var page = 0;
var lvl = 1 ;
var gameLvl = 0;
var homeBtn;
var levelBtn;
var scoresBtn;
var winSound, lostSound, clickSound, backSound;
var menu3;
var play = false;

function preload(){
  mainMenuBack = loadImage('MainMenuBack.jpg');
  lvlMenuBack = loadImage('background.jpg');
  scoresMenuBack = loadImage('scores.jpg');
  maze1Back = loadImage('Mazes/mazeOne1.png');
  maze2Back = loadImage('Mazes/mazeTwo2.png');
  maze3Back = loadImage('Mazes/mazeThree3.png');
  maze4Back = loadImage('Mazes/mazeFour4.png');
  maze5Back = loadImage('Mazes/mazeFive5.png');
  candyImg = loadImage('candy.png');
  winSound = loadSound('win.mp3');
  lostSound = loadSound('lost.mp3');
  clickSound = loadSound('click.mp3');
  backSound = loadSound('backSounds.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backSound.setVolume(1.0);
}

function draw() {
  
  if(play == false || !backSound.isPlaying()){
    backSound.play();
    play = true;
  }
  
  if(page == 0){
    mainPage();
  }
  if(page == 1 && isGameStart == false){
    lvls();
  }
  if(isGameStart == true){
    startGame();
  }
  if(page == 2){
    scoreMenu();
  }
}

function scoreMenu(){
  page = 2;
  homeBtn.hide();
  levelBtn.hide();
  scoresBtn.hide();
  image(scoresMenuBack,0,0,windowWidth,windowHeight);
  
  stroke("red");
  strokeWeight(3);
  fill("yellow");
  
  rect(20,20, windowWidth/4, windowHeight/10,50);
  rect(20,20 + 2*windowHeight/10, windowWidth/4, windowHeight/10,50);
  rect(20,20 + 4*windowHeight/10, windowWidth/4, windowHeight/10,50);
  rect(20,20 + 6*windowHeight/10, windowWidth/4, windowHeight/10,50);
  rect(20,20 + 8*windowHeight/10, windowWidth/4, windowHeight/10,50);
  noFill();
  noStroke();
  
  textSize(32)
  fill("black")
  text("LEVEL 1", 20,30,windowWidth/4, windowHeight/10 );
  text("LEVEL 2",20,30 + 2*windowHeight/10, windowWidth/4, windowHeight/10 );
  text("LEVEL 3",20,30 + 4*windowHeight/10, windowWidth/4, windowHeight/10 );
  text("LEVEL 4", 20,30 + 6*windowHeight/10,windowWidth/4, windowHeight/10 );
  text("LEVEL 5",20,30 + 8*windowHeight/10,windowWidth/4, windowHeight/10 );
  noFill();
  
  stroke("red");
  strokeWeight(3);
  fill("yellow");
  
  rect(windowWidth/4 + 50,20, windowWidth/4, windowHeight/10,50);
  rect(windowWidth/4 + 50,20 + 2*windowHeight/10, windowWidth/4, windowHeight/10,50);
  rect(windowWidth/4 + 50,20 + 4*windowHeight/10, windowWidth/4, windowHeight/10,50);
  rect(windowWidth/4 + 50,20 + 6*windowHeight/10, windowWidth/4, windowHeight/10,50);
  rect(windowWidth/4 + 50,20 + 8*windowHeight/10, windowWidth/4, windowHeight/10,50);
  noFill();
  noStroke();
  
  textSize(32)
  fill("black")
  text(score1, windowWidth/4 + 50,30,windowWidth/4, windowHeight/10 );
  text(score2,windowWidth/4 + 50,30 + 2*windowHeight/10, windowWidth/4, windowHeight/10 );
  text(score3,windowWidth/4 + 50,30 + 4*windowHeight/10, windowWidth/4, windowHeight/10 );
  text(score4, windowWidth/4 + 50,30 + 6*windowHeight/10,windowWidth/4, windowHeight/10 );
  text(score5,windowWidth/4 + 50,30 + 8*windowHeight/10,windowWidth/4, windowHeight/10 );
  noFill();
  
  if(!menu3){
    menu3 = createButton('MENU');
    menu3.position(2*windowWidth/3,windowHeight/2);
    menu3.style('font-size', '40px');
    menu3.center('vertical');
    menu3.style('background-color', color(255,95,31));
    menu3.mousePressed(function(){clickSound.play();page = 0;menu3.hide();});
  }
  menu3.show();
}

function mainPage(){
  if(menuBtn){
  playBtn.hide();
  menuBtn.hide();
  nextBtn.hide();
  backBtn.hide();
  //restartBtn.hide();
  }
  if(menu){
    playBtn.hide();
    menuBtn.hide();
    nextBtn.hide();
    backBtn.hide();
    menu.hide();
    if(!check)
      next2.hide();
  }
  if(menu2){
    playBtn.hide();
    menuBtn.hide();
    nextBtn.hide();
    backBtn.hide();
    menu2.hide();
  }
  image(mainMenuBack,0,0,windowWidth,windowHeight);
  
  textSize(80);
  textAlign(CENTER);
  fill(255,20,147);
  text("SWEET\nMAZE",windowWidth/2,windowHeight/4);
  stroke("Yellow");
  strokeWeight(7);
  
  if(!homeBtn){
    homeBtn = createButton('HOME');
    homeBtn.position(windowWidth/2,windowHeight/2);
    homeBtn.style('font-size', '50px')
    homeBtn.center('horizontal');
    homeBtn.style('background-color', color(255,215,0));
    homeBtn.mousePressed(home);
  }
  if(!levelBtn){
    levelBtn = createButton('LEVELS');
    levelBtn.position(windowWidth/2,2*windowHeight/3);
    levelBtn.style('font-size', '50px')
    levelBtn.center('horizontal');
    levelBtn.style('background-color', color(255,215,0));
    levelBtn.mousePressed(function(){clickSound.play();lvls();});
  }
  if(!scoresBtn){
    scoresBtn = createButton('SCORES');
    scoresBtn.position(windowWidth/2,7.5*windowHeight/9);
    scoresBtn.style('font-size', '50px');
    scoresBtn.center('horizontal');
    scoresBtn.style('background-color', color(255,215,0));
    scoresBtn.mousePressed(function(){clickSound.play();scoreMenu();});
  }
  homeBtn.show();
  levelBtn.show();
  scoresBtn.show();
}

function home(){
  clickSound.play();
  window.open('https://preview.p5js.org/achaud53/present/kSpYRwoyT');
}

 var playBtn, nextBtn, backBtn, menuBtn;
 var isGameStart = false;

function lvls(){
  page = 1;
  image(lvlMenuBack,0,0,windowWidth,windowHeight);
  homeBtn.hide();
  levelBtn.hide();
  scoresBtn.hide();
  
  if(lvl == 1 && gameLvl == 0){
    image(maze1Back,windowWidth/2-150,windowHeight/2 - 200,300,300);
  }  
  if(lvl == 2 && gameLvl == 0){
    image(maze2Back,windowWidth/2-150,windowHeight/2 - 200,300,300);
  }
  if(lvl == 3 && gameLvl == 0){
    image(maze3Back,windowWidth/2-150,windowHeight/2 - 200,300,300);
  }  
  if(lvl == 4 && gameLvl == 0){
    image(maze4Back,windowWidth/2-150,windowHeight/2 - 200,300,300);
  }
  if(lvl == 5 && gameLvl == 0){
    image(maze5Back,windowWidth/2-150,windowHeight/2 - 200,300,300);
  }
  
  if(!playBtn){
    playBtn = createButton('START');
    playBtn.position(windowWidth/2,windowHeight/2 + 110);//2*/3
    playBtn.style('font-size', '30px');
    playBtn.center('horizontal');
    playBtn.style('background-color', color(255,215,0));
    playBtn.mousePressed(function(){clickSound.play();isGameStart = true;millis_start=millis();timer=60;});
  }
  if(!menuBtn){
    menuBtn = createButton('MENU');
    menuBtn.position(windowWidth/2,windowHeight/2 + 160);//3*windowHeight/4+10
    menuBtn.style('font-size', '30px');
    menuBtn.center('horizontal');
    menuBtn.style('background-color', color(255,95,31));
    menuBtn.mousePressed(function(){clickSound.play();page = 0;});
  }
  if(!nextBtn){
    nextBtn = createButton('NEXT');
    nextBtn.position(windowWidth/2 + 190,windowHeight/2);//4*windowWidth/5
    nextBtn.style('font-size', '30px');
    nextBtn.center('vertical');
    nextBtn.style('background-color', color(255,20,147));
    nextBtn.mousePressed(function(){clickSound.play();if(lvl< 5)lvl++;});
  }
  if(!backBtn){
    backBtn = createButton('BACK');
    backBtn.position(windowWidth/2 - 290,windowHeight/2);//windowWidth/20
    backBtn.style('font-size', '30px');
    backBtn.center('vertical');
    backBtn.style('background-color', color(255,20,147));
    backBtn.mousePressed(function(){clickSound.play();if(lvl> 1)lvl--;});
  }
  playBtn.show();
  menuBtn.show();
  nextBtn.show();
  backBtn.show();
}

var goBtn, go = false;
var millis_start;
var timer;

function startGame(){
  image(lvlMenuBack,0,0,windowWidth,windowHeight);
  playBtn.hide();
  nextBtn.hide();
  backBtn.hide();
  menuBtn.hide();
  if(lvl<6)
    gameLvl = lvl;
  if(restartBtn || next2)
    goBtn.show();
  if(!goBtn && go == false){
    goBtn = createButton('GO');
    goBtn.position(windowWidth/2 - 290,windowHeight/2);
    goBtn.style('font-size', '30px');
    goBtn.center('vertical');
    goBtn.style('background-color', color(255,95,31));
    goBtn.mousePressed(function(){clickSound.play();go = true;});
  }
  
  
  if(gameLvl == 1){
  
    fill("Red");
    textSize(50);
    text(timer, windowWidth/20, windowHeight/12);

      image(maze1Back,(windowWidth/2)-200,(windowHeight/2)-200,maze1Back.width,maze1Back.height);
    
    if(go == true){
      if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
      goBtn.hide();
      detector();
    
    candy(mouseX,mouseY);
    }
    if (timer==0){
      //Game Over :(
      lost();
    }
  }
  else if(gameLvl == 2){
      
    fill("Red");
    textSize(50);
    text(timer, windowWidth/20, windowHeight/12);

      image(maze2Back,(windowWidth/2)-200,(windowHeight/2)-200,maze1Back.width,maze1Back.height);
    
    if(go == true){
      if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
      goBtn.hide();
      detector();
    
    candy(mouseX,mouseY);
    }
    if (timer==0){
      //Game Over :(
      lost();
    }
  }
  else if(gameLvl == 3){
      
    fill("Red");
    textSize(50);
    text(timer, windowWidth/20, windowHeight/12);

      image(maze3Back,(windowWidth/2)-200,(windowHeight/2)-200,maze1Back.width,maze1Back.height);
    
    if(go == true){
      if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
      goBtn.hide();
      detector();
    
    candy(mouseX,mouseY);
    }
    if (timer==0){
      //Game Over :(
      lost();
    }
  }
  else if(gameLvl == 4){
      
    fill("Red");
    textSize(50);
    text(timer, windowWidth/20, windowHeight/12);

      image(maze4Back,(windowWidth/2)-200,(windowHeight/2)-200,maze1Back.width,maze1Back.height);
    
    if(go == true){
      if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
      goBtn.hide();
      detector();
    
    candy(mouseX,mouseY);
    }
    if (timer==0){
      //Game Over :(
      lost();
    }
  }
  else if(gameLvl == 5){
      
    fill("Red");
    textSize(50);
    text(timer, windowWidth/20, windowHeight/12);

      image(maze5Back,(windowWidth/2)-200,(windowHeight/2)-200,maze1Back.width,maze1Back.height);
    
    if(go == true){
      if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
      goBtn.hide();
      detector();
    
    candy(mouseX,mouseY);
    }
    if (timer==0){
      //Game Over :(
      lost();
    }
  }
}

function detector(){
  var wall = color(0,0,0,255);
    var fin = color(238,75,43,255);
    //var start = color(0,255,0,255);
    var mouse1 = get(mouseX-22,mouseY);
    var mouse2 = get(mouseX,mouseY-22);
    var mouse3 = get(mouseX+22,mouseY);
    var mouse4 = get(mouseX,mouseY+22);
    
    var mouseColor1 = color(mouse1);
    var mouseColor2 = color(mouse2);
    var mouseColor3 = color(mouse3);
    var mouseColor4 = color(mouse4);

      if((mouseColor1.toString() != wall.toString())&&(mouseColor2.toString() != wall.toString())&&(mouseColor3.toString() != wall.toString())&&(mouseColor4.toString() != wall.toString()))
      ;
    else
     lost();
    
    if((mouseColor1.toString() != fin.toString())&&(mouseColor2.toString() != fin.toString())&&(mouseColor3.toString() != fin.toString())&&(mouseColor4.toString() != fin.toString()))
      ;
    else
     congrats(timer);
}

var restartBtn, score = 0, score1 = 0, score2 = 0, score3 = 0, score4 = 0, score5 = 0, menu, menu2, next2;

function congrats(time){
  winSound.play();
  tint(255,95,31,50);
  noLoop();
  textSize(80);
  textAlign(CENTER);
  fill(255,20,147);
  stroke("Yellow");
  if(timer > 50)
    score =  100;
  else if(timer < 50 && timer > 40)
    score =  80;
  else if(timer < 40 && timer > 30)
    score =  60;
  else if(timer < 30 && timer > 20)
    score =  40;
  else if(timer < 20 && timer > 10)
    score =  20;
  else
    score =  10;
  
  if(gameLvl == 1)
    score1 = score;
  else if(gameLvl == 2)
    score2 = score;
  else if(gameLvl == 3)
    score3 = score;
  else if(gameLvl == 4)
    score4 = score;
  else if(gameLvl == 5)
    score5 = score;
  
  text("CONGRATS\nYOU WON",windowWidth/2,windowHeight/2);
  textSize(50);
  fill("Black");
  text("SCORES: "+score,windowWidth/2,4*windowHeight/5)
  strokeWeight(7);
  
  if(!menu){
    menu = createButton('MENU');
    menu.position(windowWidth/2,5*windowHeight/6 - 10);
    menu.style('font-size', '30px');
    menu.center('horizontal');
    menu.style('background-color', color(255,95,31));
    menu.mousePressed(function(){clickSound.play();page = 0;loop();noTint();isGameStart = false;gameLvl = 0;});
  }
  menu.show();
  if(gameLvl < 5){
    check = false;
  if(!next2){
    next2 = createButton('NEXT');
    next2.position(windowWidth/2,5*windowHeight/6 + 40);
    next2.style('font-size', '30px');
    next2.center('horizontal');
    next2.style('background-color', color(255,95,31));
    next2.mousePressed(function(){clickSound.play();isGameStart = true;go = false;timer = 60;lvl++;loop();noTint();menu.hide();next2.hide();});
  }
  next2.show();
  }
  else
    check = true;
}

var check = false;

function lost(){
  lostSound.play();
  noLoop();
  textSize(80);
  textAlign(CENTER);
  fill(255,20,147);
  stroke("Yellow");
  text("SORRY\nYOU LOST",windowWidth/2,windowHeight/2);
  strokeWeight(7);
  
  if(!restartBtn){
    restartBtn = createButton('RESTART');
    restartBtn.position(windowWidth/2,3*windowHeight/4 - 10);
    restartBtn.style('font-size', '30px');
    restartBtn.center('horizontal');
    restartBtn.style('background-color', color(255,95,31));
    restartBtn.mousePressed(function(){clickSound.play();timer = 60;go = false; loop();restartBtn.hide();menu2.hide();});
  }
  restartBtn.show();
  if(!menu2){
    menu2 = createButton('MENU');
    menu2.position(windowWidth/2,5*windowHeight/6);
    menu2.style('font-size', '30px');
    menu2.center('horizontal');
    menu2.style('background-color', color(255,95,31));
    menu2.mousePressed(function(){clickSound.play();isGameStart = false;gameLvl = 0;loop();page = 0;noTint();restartBtn.hide();});
  }
  menu2.show();
}

let xDrag , yDrag ;
let xClick, yClick;
// 238,75,43,255 red #EE4B2B
//0,255,0,255 green #00FF00
function candy(x,y){
  image(candyImg,x-25,y-25,50,50);
}

function trail(){
  fill("red");
  circle(mouseX, mouseY, 20)
  noFill();
}

function mouseDragged(){
  xDrag = mouseX;
  yDrag = mouseY;
}

function mouseClicked(){
  xClick = mouseX;
  yClick = mouseY;
}