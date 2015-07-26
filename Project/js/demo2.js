
function Line(point_start,point_end) {
	// Function body is the c'tor
	console.log("Line C'tor");

	this.point_start = point_start; // {x:int, y:int}
	this.point_end = point_end; // {x:int, y:int}
	this.ticks = 0;
}

// pos : {x:int,y:int}
function Dot(point_pos) {
	// Function body is the c'tor
	console.log("Dot C'tor");

	this.point_pos = point_pos;
}

function Game(canvasObj) {
	// Function body is the c'tor
	console.log("Game C'tor");

	this.canvas = canvasObj;
	this.ctx = this.canvas.getContext('2d');
	this.ctx.strokeStyle = 'blue';

	this.Lines = [new Line({x:0,y:0},{x:50,y:50})];
	this.Dots = [new Dot({x:51,y:51})];


	// Game technical settings
	this.refresh_rate = 40;
	this.inf_line_length = 5;

	this.dots_radius = 6;	

	this._drawScene = function() {
		// clean canvas
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

		// Loop over & draw Lines
		for(idx = 0, len = this.Lines.length ; idx < len ; idx++) {
			line = this.Lines[idx];
			this.ctx.beginPath();
			this.ctx.moveTo(line.point_start.x,line.point_start.y);
			this.ctx.lineTo(line.point_end.x,line.point_end.y);
			this.ctx.stroke();
		}

		// Loop over & draw Dots
		for(idx = 0, len = this.Dots.length ; idx < len ; idx++) {
			dot = this.Dots[idx];
			this.ctx.beginPath();
			this.ctx.arc(dot.point_pos.x, dot.point_pos.y, this.dots_radius, 0, 2*Math.PI);
			this.ctx.closePath();
		}

		this.ctx.stroke();
	}

	// Main game loop
	this.gameTick = function() {
	}

	// Key press handler
	this.onKeyPress = function(e) {
	}
}

function demoVer2() {
	var game = new Game(document.getElementById('game_canvas'));
	game._drawScene();
}