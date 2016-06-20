'use strict'


function Sprite(img){
	this.img = img;
	this.sx = 0;
	this.sy = 0;
	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;
	this.r = 0;
	this.speed = 0;
}
Sprite.prototype.move=function(){
	//目前是比较简单的版本。v2.0
	var speedX = Math.sin(d2a(this.r))*this.speed;
	var speedY = -Math.cos(d2a(this.r))*this.speed;
	this.x += speedX;
	this.y += speedY;
};
Sprite.prototype.collTest=function(obj){
	//this<---->obj
	var a = this.x-obj.x;
	var b = this.y-obj.y;
	var c = Math.sqrt(a*a+b*b);
	if(c<30){
		return true;
	}else{
		return false;
	}
};
Sprite.prototype.draw=function(gd){
	gd.beginPath();
	
	gd.save();
	
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.r));
	gd.drawImage(
		this.img,
		this.sx,this.sy,this.w,this.h,
		-this.w/2,-this.h/2,this.w,this.h
	);
	
	gd.restore();
};