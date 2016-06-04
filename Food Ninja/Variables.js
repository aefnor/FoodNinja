/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var snd = new Audio("bkg.music.mp3");
var snd2 = new Audio("collide.sound2.mp3");
var sndlayer = new Array();
snd.loop=true;
snd.play();
var gs = false;
var numImages = 12;
var numLoaded = 0;
var gameStarted = false;
var can = document.getElementById("myCanvas");
var ctx = can.getContext("2d");
var sh = can.height;
var sw = can.width;
var pi = 3.141;
var time = .125 ;
ctx.font = "30pt trebuchet";
			
var stamps = new Array();
var maxStamps = 5;
var calLimit=2500;
var attackPower = 1;

var img = new Array();
var type = new Array();
var point = new Array();
var combo = 1;
var foodConsumed = 0;
var gfood = 0;
var bfood = 0;

var FoodCount = new Array(11);
for (var i = 0; i < 12;i++){
	FoodCount[i] =0;
	}
var FoodName = new Array();
console.log("vars loaded");