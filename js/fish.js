'use strict'

function Fish(images,type){
	Sprite.call(this,images['fish'+type]);
	
	this._size = [
		null,
		{w:37,h:55},
		{w:64,h:78},
		{w:56,h:72},
		{w:59,h:77},
		{w:122,h:107}
	];
	
	this.w = this._size[type].w;
	this.h = this._size[type].h;
	
	this.speed = 3;
	
}
Fish.prototype = new Sprite();
Fish.prototype.constructor = Fish;
Fish.prototype.swim = function(){
	this.sx+=this.w;
	if(this.sx>=this.w*4){
		this.sx=0;
	}
};