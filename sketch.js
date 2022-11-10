let GuiBack;
let GameBack;
let HelpBack;
let ScoreBack;
let pg = 0;
let gameBtn;
let scoresBtn;
let helpBtn;
let homeBtn;

function preload(){
  GuiBack = loadImage('GuiBack.png');
  GameBack = loadImage('GameSc.png');
  HelpBack = loadImage('helpBack.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(pg == 0){
    image(GuiBack,0,0,windowWidth,windowHeight);
    
    if(homeBtn){
      gameBtn.show();
      helpBtn.show();
      g1.hide();
      g2.hide();
      g3.hide();
      g4.hide();
      g5.hide();
    }
    mainBtns();
  } 
  else if(pg == 1){
    gamePage();
    homeButton();
  }
  else if(pg == 2){
    image(HelpBack,0,0,windowWidth,windowHeight);
    homeButton();
  }
}

var g1, g2, g3, g4, g5;

function gamePage(){
  image(GameBack,0,0,windowWidth,windowHeight);
  
  if(!g1){
    g1 = createButton('CONNECT THE GUMDROPS');
    g1.position(windowWidth/2,windowHeight/5 + 30);
    g1.style('font-size', '40px')
    g1.center('horizontal');
    g1.style('background-color', color(255, 213, 128));
    g1.mousePressed(function(){window.open('https://editor.p5js.org/rnucuta/full/Yp5a6r6p8');});
  }
  if(!g2){
    g2 = createButton('CANDY CONNECTIONS');
    g2.position(windowWidth/2,windowHeight/5 + 100);
    g2.style('font-size', '40px')
    g2.center('horizontal');
    g2.style('background-color', color(255, 213, 128));
    g2.mousePressed(function(){window.open('https://editor.p5js.org/ajaubrey/full/o04DTtMfD');});
  }
  if(!g3){
    g3 = createButton('LICORICE TRACE');
    g3.position(windowWidth/2,windowHeight/5 + 170);
    g3.style('font-size', '40px')
    g3.center('horizontal');
    g3.style('background-color', color(255, 213, 128));
    g3.mousePressed(function(){window.open('https://editor.p5js.org/rburjanr/full/EXtLkN0wU');});
  }
  if(!g4){
    g4 = createButton('SWEET MAZE');
    g4.position(windowWidth/2,windowHeight/5 + 240);
    g4.style('font-size', '40px')
    g4.center('horizontal');
    g4.style('background-color', color(255, 213, 128));
    g4.mousePressed(function(){window.open('https://editor.p5js.org/achaud53/full/MvZde4nO8');});
  }
  if(!g5){
    g5 = createButton('CANDY SAYS');
    g5.position(windowWidth/2,windowHeight/5 + 310);
    g5.style('font-size', '40px')
    g5.center('horizontal');
    g5.style('background-color', color(255, 213, 128));
    g5.mousePressed(function(){window.open('https://editor.p5js.org/heba19/full/cRt-1TCt7');});
  }
  g1.show();
  g2.show();
  g3.show();
  g4.show();
  g5.show();
}

function mainBtns(){
 
  if(!gameBtn){ 
    gameBtn = createImg('gameBtn.png','GAMES BUTTON');
    gameBtn.size(windowWidth/3,windowHeight/5);
    gameBtn.position(windowWidth/2 ,windowHeight/2 - windowHeight/6);
    gameBtn.center('horizontal');
    gameBtn.mousePressed(function(){pg = 1;gameBtn.hide();helpBtn.hide();});
  }
  
  if(!helpBtn){
    helpBtn = createImg('helpBtn.png','HELP BUTTON');
    helpBtn.size(windowWidth/3,windowHeight/5);
    helpBtn.position(2*windowWidth/3 ,windowHeight/2 + windowHeight/8);
    helpBtn.center('horizontal');
    helpBtn.mousePressed(function(){pg = 2;gameBtn.hide();helpBtn.hide();})
}
  }

function homeButton(){
  
  if(!homeBtn){
    homeBtn = createImg('homeBtn.png','HOME BUTTON');
    homeBtn.size(windowWidth/10,windowHeight/7);
    homeBtn.position(windowWidth/20 ,windowHeight/15);
    homeBtn.mousePressed(function(){pg = 0;homeBtn.hide();})
  }
  homeBtn.show();
}
