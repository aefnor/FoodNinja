/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function rnd(min,max){
	return (Math.random() * max) + min;
}
function degreeToRad(degree){
	return degree* (pi/180);
}
function radToDegree(rad){
	return rad * (180/pi);
}
function sin(ang){
	return Math.sin(degreeToRad(ang));
}
function cos(ang){
	return Math.cos(degreeToRad(ang));
}
function dist(x1,y1,x2,y2){
	var d1= (x2-x1);
	var d2 =(y2-y1);
	return Math.sqrt(d1*d1 + d2*d2);
}
function colTest(player,food) {
	if (food.ix<player.x && food.ix+food.isx>player.x && food.iy<player.y && food.iy+food.isy>player.y){return true;} 
	return false;
}

function fader(){
	this.size = 20;
	this.alpha = 1.0;
	this.x, this.y;
}

function fadeOut(text,i) {
	if (exp){
    var  // full opacity
        interval = setInterval(function () {
            ctx.fillStyle = "rgba(255, 0, 0, " + fades[i].alpha + ")";
            ctx.font = "bold "+fades[i].size+"pt Arial";
            ctx.fillText(text, fades[i].x--, fades[i].y++);
            fades[i].alpha = fades[i].alpha - 0.05; // decrease opacity (fade out)
			fades[i].size += 1;
			
            if (fades[i].alpha < 0) {
             //   can.width = can.width;
                clearInterval(interval);
				exp = false;
				fades.splice(i,1);
				ctx.fillStyle = "rgba(255, 0, 0, " + 1+ ")";
				ctx.font = "bold "+20+"pt Arial";
				ctx.fillText(text, x, y);
            }
        }, 50); 
	}else{
				ctx.fillStyle = "rgba(255, 0, 0, " + 1+ ")";
			   ctx.font = "bold "+20+"pt Arial";
			   ctx.fillText(text, x, y);
		   }
}


