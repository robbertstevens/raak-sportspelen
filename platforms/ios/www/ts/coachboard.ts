/// <reference path="references.ts" />

class CoachBoard {
	private _canvas: HTMLCanvasElement;
	private	_context: CanvasRenderingContext2D;
	private	_objects: IDrawable[];
	private	_current: Vector; 
	private	_prev: Vector; 
	private	_end: Vector; 
	private	_start: Vector;
	private _shapeType: string;
	private _shapeFactory: ShapeFactory;

	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;		
		this._objects = [];
		this._shapeType = "fixedLine";
		this._context = this.getContext2d();
		
		this._shapeFactory = new ShapeFactory(this._context);	

		this._canvas.addEventListener("touchstart", this.touchStart.bind(this), false);
		this._canvas.addEventListener("touchmove", this.touchMove.bind(this), false);
		this._canvas.addEventListener("touchend", this.touchEnd.bind(this), false);	
	}
	private getContext2d() {
		return this._canvas.getContext("2d");
	}
	public touchStart(e: TouchEvent) {		
		var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
		this._current = pos;
		this._start = pos;		
	}

	public touchMove(e: TouchEvent) {
		var pos = new Vector(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
		this._prev = this._current;
		this._current = pos;
		this.invalidate();
	}

	public touchEnd(e: TouchEvent) {		
		var pos = new Vector(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
		this._prev = null;
		this._current = null;
		this._end = pos;	
		console.log(this._shapeType);		
		this._objects.push(this._shapeFactory.CreateShape(this._shapeType,this._start, this._end));
		this.invalidate();
	} 
	private invalidate() {
		this.clear(false);
		if(this._start != null && this._current != null)
		{
			this._shapeFactory.CreateShape(this._shapeType,this._start,this._current).draw();	
		}		

		this._objects.forEach(function(obj) {
			obj.draw();
		});
		console.log(this._objects);
	}
	private clear(full: boolean) {
		this._context.clearRect(0,0,this._canvas.width, this._canvas.height);
		if ( full ) {
			this._objects = [];
		}
	}

	public setShapeType(shape: string){
		this._shapeType = shape;
	}
} 
