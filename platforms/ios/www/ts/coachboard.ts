/// <reference path="references.ts" />

class Coachboard {
	private _canvas: HTMLCanvasElement;
			_current: Vector; 
			_prev: Vector; 
			_end: Vector; 
			_start: Vector;
	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
	}
	private getContext2d() {
		return this._canvas.getContext("2d");
	}
	private touchStart(e: TouchEvent) {
		var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
		this._current = pos;
		this._start = pos;
		

	}
} 
