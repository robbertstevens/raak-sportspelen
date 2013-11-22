/// <reference path="references.ts" />

class ShapeFactory {
	private _newShape: IDrawable;
	private _context : CanvasRenderingContext2D;
	constructor(context: CanvasRenderingContext2D){
		this._context = context;
	}
	public CreateShape(shape: string, from: Vector, to: Vector) {		
		switch (shape)
		{
		  case "fixedLine" :
		    this._newShape = new Line(from, to, this._context);
		    break;
		  case "rectangle" :
		    this._newShape = new Rectangle(from, to, this._context);
		    break;			
		}
		return this._newShape;
	}
}