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

var hiddenEgg={};
hiddenEgg["x"]=446;
hiddenEgg["y"]=238;
var eggArray=[];
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=377;
hiddenEgg["y"]=189;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=522;
hiddenEgg["y"]=199;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=387;
hiddenEgg["y"]=199;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=278;
hiddenEgg["y"]=189;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

eggDetails["image"]="./pics/image1.jpg";
eggDetails["hiddenEggs"]=eggArray;
theEggs.push(JSON.parse(JSON.stringify(eggDetails)));

//****************

eggDetails["image"]="./pics/image2.jpg";
var hiddenEgg={};
hiddenEgg["x"]=361;
hiddenEgg["y"]=254;
var eggArray=[];
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=177;
hiddenEgg["y"]=221;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=522;
hiddenEgg["y"]=199;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=549;
hiddenEgg["y"]=401;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=382;
hiddenEgg["y"]=178;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


eggDetails["hiddenEggs"]=eggArray;
theEggs.push(JSON.parse(JSON.stringify(eggDetails)));


//****************

eggDetails["image"]="./pics/image3.jpg";
var hiddenEgg={};
hiddenEgg["x"]=96;
hiddenEgg["y"]=237;
var eggArray=[];
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=308;
hiddenEgg["y"]=224;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=136;
hiddenEgg["y"]=377;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=257;
hiddenEgg["y"]=247;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


hiddenEgg["x"]=8;
hiddenEgg["y"]=240;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


eggDetails["hiddenEggs"]=eggArray;
theEggs.push(JSON.parse(JSON.stringify(eggDetails)));



//****************

eggDetails["image"]="./pics/image5.jpg";
var hiddenEgg={};
hiddenEgg["x"]=554;
hiddenEgg["y"]=303;
var eggArray=[];
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=402;
hiddenEgg["y"]=245;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=29;
hiddenEgg["y"]=230;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=474;
hiddenEgg["y"]=225;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


hiddenEgg["x"]=239;
hiddenEgg["y"]=190;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


eggDetails["hiddenEggs"]=eggArray;
theEggs.push(JSON.parse(JSON.stringify(eggDetails)));

//****************

eggDetails["image"]="./pics/image10.jpg";
var hiddenEgg={};
hiddenEgg["x"]=186;
hiddenEgg["y"]=106;
var eggArray=[];
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=304;
hiddenEgg["y"]=217;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=78;
hiddenEgg["y"]=189;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=180;
hiddenEgg["y"]=178;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


hiddenEgg["x"]=551;
hiddenEgg["y"]=324;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


eggDetails["hiddenEggs"]=eggArray;
theEggs.push(JSON.parse(JSON.stringify(eggDetails)));






//****************

eggDetails["image"]="./pics/image8.jpg";
var hiddenEgg={};
hiddenEgg["x"]=52;
hiddenEgg["y"]=171;
var eggArray=[];
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=495;
hiddenEgg["y"]=268;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=123;
hiddenEgg["y"]=220;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=46;
hiddenEgg["y"]=435;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


hiddenEgg["x"]=594;
hiddenEgg["y"]=439;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


eggDetails["hiddenEggs"]=eggArray;
theEggs.push(JSON.parse(JSON.stringify(eggDetails)));

//****************

eggDetails["image"]="./pics/image9.jpg";
var hiddenEgg={};
hiddenEgg["x"]=538;
hiddenEgg["y"]=336;
var eggArray=[];
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=288;
hiddenEgg["y"]=214;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));

hiddenEgg["x"]=71;
hiddenEgg["y"]=338;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)));


hiddenEgg["x"]=180;
hiddenEgg["y"]=178;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


hiddenEgg["x"]=462;
hiddenEgg["y"]=207;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


eggDetails["hiddenEggs"]=eggArray;
eggArray.push(JSON.parse(JSON.stringify(hiddenEgg)))


if (typeof loadData !== "undefined") { 
window.onload = function ()
{
 loadData(settings,theEggs);
}

}


