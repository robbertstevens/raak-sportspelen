/// <reference path="references.ts" />

class Coachboard {
	private _canvas: HTMLCanvasElement;
	private	_context: CanvasRenderingContext2D;
	private	_objects: IDrawable[];
	private	_current: Vector; 
	private	_prev: Vector; 
	private	_end: Vector; 
	private	_start: Vector;
	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
	}
	private getContext2d() {
		return this._canvas.getContext("2d");
	}
	public touchStart(e: TouchEvent) {
		var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
		this._current = pos;
		this._start = pos;


	}
	public touchEnd(e: TouchEvent) {
		var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
		this._prev = null;
		this._current = null;
		this._end = pos;
		this._objects.push(null);
	} 
	private invalidate() {
		this._objects.forEach(function(obj) {
			obj.draw();
		});
	}
	private clear(full: boolean) {
		this._context.clearRect(0,0,this._canvas.width, this._canvas.height);
		if ( full ) {
			this._objects = [];
		}
	}
} 
