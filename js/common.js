'use strict'

/*
** @Desc 		这是整个游戏的公共js接口
*/
function loadImage(json,fn){
	var loaded = 0;
	var total = 0;
	var result = {};
	for(var name in json){
		total++;
		var oImg = new Image();
		oImg.src = json[name];
		result[name] = oImg;
		oImg.onload=function(){
			loaded++;
			if(loaded==total){
				fn&&fn(result);
			}
		};
	}
}

function d2a(n){
	return n*Math.PI/180;
}

function a2d(n){
	return n*180/Math.PI;
}

function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}








