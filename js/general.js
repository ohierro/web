var canvas;
var ctx;
 
var background;
var width = 300;
var height = 200;
 
var cloud = new Array(10);
var cloud_x = new Array(10);
var cloud_y = new Array(10);
var cloud_increment = new Array(10);
 
function init() {
	canvas = document.getElementById("cloud_demo_canvas");
	
	/*
	width = window.innerWidth;
	height = window.innerHeight;
	*/
	
	/*
	width = canvas.width;
	height = canvas.height;
	*/
	
	ctx = canvas.getContext("2d");
	
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	
	width = canvas.width;
	height = canvas.height;
 
	// init background 
	background = new Image();
	background.src = './img/background.png';
 
	// init cloud
	for ( var i=0; i<10; i++)  {
		cloud[i] = new Image();
		//cloud.src = 'http://silveiraneto.net/wp-content/uploads/2011/06/cloud.png';
		var cloudImage = Math.floor((Math.random()*3)+1);
		cloud[i].src = './img/cloud' + cloudImage + '.png';
		cloud_x[i] = -300;
		cloud_y[i] = Math.floor((Math.random()*200)+1);
		cloud_increment[i] = Math.floor((Math.random()*3)+1) / 10;
		/*
		cloud[i].onload = function() { 	
			cloud_x[i] = -cloud[i].width;		
		};
		*/
		
		
	}	
	 
	// set refresh interval
	return setInterval(main_loop, 10);
}
 
function update(){
	for (var i=0; i<10; i++) {
		cloud_x[i] += cloud_increment[i]/2;
		if (cloud_x[i] > width ) {
			cloud_x[i] = -cloud[i].width;
		}
	}
}
 
function draw() {	
	/*
	ctx.rect(0,0,width,height);
	ctx.fillStyle="white";
	ctx.fill();
	*/
	// Create Linear Gradients
	var lingrad = ctx.createLinearGradient(0,0,0,height);
	lingrad.addColorStop(0, '#00ABEB');
	lingrad.addColorStop(0.7, '#fff');
	//lingrad.addColorStop(0.5, '#66CC00');
	lingrad.addColorStop(1, '#fff');
	ctx.fillStyle = lingrad;
	ctx.fillRect(0,0,width,height);
    
	ctx.drawImage(background, 0, 0, width, height);

	ctx.globalAlpha = 0.7;
	for (var i=0; i<10; i++) {		
		ctx.drawImage(cloud[i], cloud_x[i], cloud_y[i]);
	}
	
	ctx.globalAlpha = 1;
}

 
function main_loop() {
	draw();
	update();
}