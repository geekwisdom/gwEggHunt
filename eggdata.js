//var pics=["./pics/image1.jpg","./pics/image2.jpg","./pics/image3.jpg","./pics/image4.jpg","./pics/image5.jpg","./pics/image7.jpg","./pics/image8.jpg","./pics/image8.jpg","./pics/image9.jpg"];


var settings={}
settings["scoreElement"]="score";
settings["docElement"]="currentPic";
settings["eggElement"]="egg";
settings["timerElement"]="timer";
settings["timerElement"]="timer";
settings["soundFile"]="./sounds/correct.mp3";
var EggAry=[];
for (var i=1;i<9;i++) EggAry.push("./eggs/egg" + i + ".png"); 


settings["EggAry"]=EggAry;

//*********************************************************
var theEggs=[];
var eggDetails={};
eggDetails["image"]="./pics/image1.jpg";
var hiddenEgg={};
hiddenEgg["x"]=446;
hiddenEgg["y"]=238;
var eggArray=[];
eggArray.push({...hiddenEgg});

hiddenEgg["x"]=377;
hiddenEgg["y"]=189;
eggArray.push({...hiddenEgg});

hiddenEgg["x"]=522;
hiddenEgg["y"]=199;
eggArray.push({...hiddenEgg});


hiddenEgg["x"]=387;
hiddenEgg["y"]=199;
eggArray.push({...hiddenEgg})


hiddenEgg["x"]=278;
hiddenEgg["y"]=189;
eggArray.push({...hiddenEgg})


eggDetails["hiddenEggs"]=eggArray;
theEggs.push({...eggDetails});

//****************

eggDetails["image"]="./pics/image2.jpg";
var hiddenEgg={};
hiddenEgg["x"]=361;
hiddenEgg["y"]=254;
var eggArray=[];
eggArray.push({...hiddenEgg});

hiddenEgg["x"]=177;
hiddenEgg["y"]=221;
eggArray.push({...hiddenEgg});

hiddenEgg["x"]=522;
hiddenEgg["y"]=199;
eggArray.push({...hiddenEgg});


hiddenEgg["x"]=549;
hiddenEgg["y"]=401;
eggArray.push({...hiddenEgg})


hiddenEgg["x"]=382;
hiddenEgg["y"]=178;
eggArray.push({...hiddenEgg})


eggDetails["hiddenEggs"]=eggArray;
theEggs.push({...eggDetails});


