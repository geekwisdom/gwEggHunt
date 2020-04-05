/********************************************************************************
Script Name: gwEggHunt.js
@(#) Purpose: This script impelments the virtual Easter Egg Game "Egg Hunt"
@(#) It allows you to implement your own Easte Egg Hunt
**********************************************************************************
Written By: Brad Detchevery
Created: Apr 5, 2002
********************************************************************************
MIT License [MODIFIED COPYRIGHT NOTICE]

-- BEGIN COPYRIGHT NOTICE --
Copyright (c) 2020 Brad Detchevery
This product uses GeekWisdom.org Software, and has been provided FREE OF CHARGE.
If you like it please consider becoming a Patron at https://patreon.com/GeekWisdom
-- END COPYRIGHT NOTICE --

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice (text between the -- BEGIN COPYRIGHT NOTICE -- and -- END COPYRIGHT NOTICE --)
and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
******************************************************************************/

function gwEggHunt(settings,imgData)
{

this.Settings=settings
this.countdown=120;
this.score=0;
this.images=imgData;
this.imgElName=this.Settings.docElement;
var picImage=document.getElementById(this.imgElName);
picImage.addEventListener('load', function() {picImage.style.display="block";  });
this.ImageIndex=-1;
this.currentImage = document.getElementById(this.Settings.docElement);

}

gwEggHunt.prototype.checkEgg = function (x,y)
{
//return true if x,y is near bounds of egg
//false otherwise
var box=20; //box size
for (var i=0;i<this.images[this.ImageIndex]["hiddenEggs"].length;i++)
 {
 var hiddenEgg = this.images[this.ImageIndex]["hiddenEggs"][i];
 var topX=hiddenEgg["x"] - box;
 var topY=hiddenEgg["y"] - box;
 var bottomX = hiddenEgg["x"] + box;
 var bottomY = hiddenEgg["y"] + box;
 console.clear()
 console.log ("x:" + x + ",y:"+y);
 console.log ("top: (" + topX + "," + topY + ") bottom: (" + bottomX + "," + bottomY + ")");

 if (x > topX && y > topY && x < bottomX && y < bottomY) 
    {
    if (!(hiddenEgg.hasOwnProperty("found")))
       {
         hiddenEgg.found=true;
         this.score++;
         document.getElementById(this.Settings.scoreElement).textContent=this.score;
         return true;
       }
    }
 }
return false;
}

gwEggHunt.prototype.NextImage = function()
{
var self=this;

var eggEl = document.getElementById(self.Settings.eggElement)   ;
eggEl.style.display="none";


this.ImageIndex++;
if (this.ImageIndex > this.images.length-1) this.ImageIndex=0;
var retval=this.images[this.ImageIndex].image;
this.currentImage.src=retval;
return true;
}

gwEggHunt.prototype.PlayGame = function()
{

var getRandomInt = function (min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getRndEgg = function()
{
var EggAry = self.Settings.EggAry;
var index=getRandomInt(0,EggAry.length-1);
return EggAry[index];
}


var self=this;

var eggEl = document.getElementById(self.Settings.eggElement)   ;
eggEl.style.display="none";
eggEl.src=getRndEgg();

var playSound = function(soundfile)
{
var audio = new Audio(soundfile);
audio.play();
}


var getRandomInt = function (min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getRndEgg = function()
{
var EggAry = self.Settings.EggAry;
var index=getRandomInt(0,EggAry.length-1);
return EggAry[index];
}

var findEgg =  function(e)
  {
 //var rect = e.target.getBoundingClientRect();
    bounds=this.getBoundingClientRect();
    var left=bounds.left;
    var top=bounds.top;
    var x = event.pageX - left;
    var y = event.pageY - top;

  if (self.checkEgg(x,y))
   {
  playSound(self.Settings.soundFile);
  var eggEl = document.getElementById(self.Settings.eggElement);
  eggEl.style.display="none";
   
  eggEl.style.position= "absolute";
   eggEl.style.left=x;
    eggEl.style.top=y;
     eggEl.style.display="block";
   }
 else
 {
var eggEl = document.getElementById(self.Settings.eggElement)   ;
eggEl.src=getRndEgg();
eggEl.style.display="none";

}
}

var seconds_to_time = function (the_time) {
    var sec_num = parseInt(the_time, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

var runTimer = function ()
{
self.countdown--;
if (self.countdown == 0)
 {
 alert ("Game Over: You found " + self.score + " eggs!");
 location.reload(true);
 }
else
{
document.getElementById(self.Settings["timerElement"]).textContent = seconds_to_time(self.countdown);
setTimeout(function(){ runTimer(); }, 1000);
}
}

this.currentImage.addEventListener("click",findEgg);

this.ImageIndex=getRandomInt(0,this.ImageIndex=this.images.length-1);
this.NextImage();
runTimer();
}


gwEggHunt.prototype.PrevImage = function()
{
var self=this;
this.ImageIndex--;

var eggEl = document.getElementById(self.Settings.eggElement)   ;
eggEl.style.display="none";

if (this.ImageIndex < 0) this.ImageIndex=this.images.length-1;
var retval=this.images[this.ImageIndex].image;

this.currentImage.src=retval;
return true;
}
