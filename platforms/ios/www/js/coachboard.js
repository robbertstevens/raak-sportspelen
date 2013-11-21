document.addEventListener("DOMContentLoaded", main);

function main() {
	var canvas = document.getElementsByTagName("canvas")[0],
		cb = new coachboard(canvas);

	cb.initialize();

	document.getElementById('clearButton').addEventListener('touchend', function(e){
		cb.clear(true);
	}, false);
}

function coachboard(canvas) {
	var _objects = [], // Alle objecten die op het coachboard komen
		_canvas = canvas,
		_context, _start = null, _end = null, _current = null, _prev = null, _this = this;

	this.initialize = function() {
		_context = this.getContext2d();
		_canvas.width = window.innerWidth;
		_canvas.height = window.innerHeight;

		_canvas.addEventListener("touchstart", this.touchStart, false);
		_canvas.addEventListener("touchend", this.touchEnd, false);
		_canvas.addEventListener("touchmove", this.touchMove, false); //Needed in object not in this overall coachboard

		//Initial Draw
		this.invalidate();
	};

	this.getContext2d = function() {
		return canvas.getContext("2d");
	};
	
	this.touchStart = function(event) {
		var pos = new vector(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
		_current = pos; 
		_start = pos;
		_this.invalidate();
	};
	
	this.touchEnd = function(event) {
		var pos = new vector(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
		_current = null;
		_prev = null;
		_end = pos;

		_objects.push(new rectangle(_start, _end));
		_this.invalidate(); 
	};

	// Not used (yet)
	this.touchMove =function(event) {
		var pos = new vector(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
		_prev = _current;
		_current = pos;

		_this.invalidate();
	};

	// Redraws the whole thing
	this.invalidate = function() {
		console.log("drawing");
		
		this.clear();
		for(var i = 0; i < _objects.length; i++) {
			_objects[i].draw(_context);
		}
		//if ( _end == null) {
		_context.beginPath();
		if(_start != null && _current != null){
			_context.moveTo(_start.x, _start.y);
			_context.lineTo(_current.x, _current.y);
		}
		_context.stroke();
		_context.closePath();
		
		//}
		
	};

	// Very dangerous function
	// deletes everything from the canvas!
	this.clear = function(full){
		_context.clearRect(0,0,_canvas.width, _canvas.height);
		if(full)
			_objects = [];
	};

}