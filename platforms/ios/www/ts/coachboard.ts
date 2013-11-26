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
	private _rect: ClientRect;

	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
		this._rect = this._canvas.getBoundingClientRect();		
		this._objects = [];
		this._shapeType = "fixedLine";
		this._context = this.getContext2d();
		this.drawField();
		
		this._shapeFactory = new ShapeFactory(this._context);	

		this._canvas.addEventListener("touchstart", this.touchStart.bind(this), false);
		this._canvas.addEventListener("touchmove", this.touchMove.bind(this), false);
		this._canvas.addEventListener("touchend", this.touchEnd.bind(this), false);
		
		
	}
	private getContext2d() {
		return this._canvas.getContext("2d");
	}
	public touchStart(e: TouchEvent) {		
		var pos = new Vector(e.targetTouches[0].pageX - this._rect.left, e.targetTouches[0].pageY - this._rect.top);		
		
		this._current = pos;
		this._start = pos;		
	}

	public touchMove(e: TouchEvent) {
		var pos = new Vector(e.changedTouches[0].pageX - this._rect.left, e.changedTouches[0].pageY - this._rect.top);
		
		this._prev = this._current;
		this._current = pos;
		if(this._shapeType === "freeLine")
		{
			var dif = this._prev.difference(this._current);
			if ( dif.x > 0 || dif.y > 0)
			this._objects.push(this._shapeFactory.CreateShape(this._shapeType,this._prev, this._current));
		}
		this.invalidate();
	}

	public touchEnd(e: TouchEvent) {		
		var pos = new Vector(e.changedTouches[0].pageX - this._rect.left, e.changedTouches[0].pageY - this._rect.top);
		
		this._prev = null;
		this._current = null;
		this._end = pos;		
		if(this._shapeType != "freeLine")
		{

			this._objects.push(this._shapeFactory.CreateShape(this._shapeType,this._start, this._end));	
		}		
		
		this.invalidate();
	} 
	private invalidate() {
		this.clear(false);
		if(this._start != null && this._current != null && this._shapeType != "freeLine")
		{
			this._shapeFactory.CreateShape(this._shapeType,this._start,this._current).draw();	
		}		

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

	public setShapeType(shape: string){
		this._shapeType = shape;
	}

	public drawField()
	{
		var veld = <PlayField>JSON.parse(RaakStorage.getItem("veld"));
		console.log();
	  this._canvas.style.backgroundColor = veld.fieldColor;
	}
} 
