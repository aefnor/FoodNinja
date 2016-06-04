/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
bImg = new Array( new Image(), new Image());
bImg[0].src="Game_bckrnd.png";
bImg[1].src="Press to start Black.png";
var gs2 = false;
var legend = new Image();
legend.src = "CGCCHackathonProjectLegend.png";	
legend.onload = legendGame();

	function startGame(e) {
				var userX = e.offsetX,userY=e.offsetY;
				if((userX<bImg[1].width)&&userY<bImg[1].height+120&&userY>120){
					if((numLoaded === numImages) && (!gameStarted)){
						init();
						can.onmousemove = clicked;	
					}
					gameStarted=true;
				}
			}
			function RdGame(e){
					
				if(!gs){
				ctx.drawImage(bImg[0],0,0);
				ctx.drawImage(bImg[1],20,120);
				can.addEventListener("click", startGame);
				}
				gs = true;
			}
function legendGame(){
	ctx.drawImage(legend,85,7);
	can.addEventListener("click", RdGame());
}

function loaded() {
	numLoaded++;//console.log(numLoaded);
	if (numLoaded===numImages) {legendGame();}
}
function nImg(a,s){
	var nx=a.length;
	a[nx]=new Image();
	a[nx].src=s;
	a[nx].onload = loaded;
	
}


nImg(img,"Soda.png");		type[0] = 0; point[0] = 180;FoodName[0] = "Soda";
nImg(img,"IceCream.png");	type[1] = 0; point[1] = 170;FoodName[1] = "Ice Cream";
nImg(img,"Eggplant.png");	type[2] = 1; point[2] = 30;FoodName[2] = "Eggplant";
nImg(img,"WcFries.png");	type[3] = 0; point[3] = 360;FoodName[3] = "WcFries";
nImg(img,"Strawberry.png");	type[4] = 1; point[4] = 10;FoodName[4] = "Strawberry";
nImg(img,"Pizza.png");		type[5] = 0; point[5] = 280;FoodName[5] = "Pizza";
nImg(img,"Brocoli.png");	type[6] = 1;point[6] = 50;FoodName[6] = "Brocoli";
nImg(img,"Chips.png");		type[7] = 0;point[7] = 150;FoodName[7] = "Chips";
nImg(img,"Banana.png");		type[8] = 1;point[8] = 90;FoodName[8] = "Banana";
nImg(img,"Apple.png");		type[9] = 1;point[9] = 80;FoodName[9]="Apple";
nImg(img,"Burger.png");		type[10] = 0;point[10] = 420;FoodName[10] = "Burger";
nImg(img,"Carrot.png");		type[11] = 1;point[11] = 20;FoodName[11]= "Carrot";





console.log("Images loaded");

