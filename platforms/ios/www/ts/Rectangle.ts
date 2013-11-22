/// <reference path="references.ts" />
class Rectangle implements IDrawable{
	from: Vector;
	to: Vector;
	canvas: CanvasRenderingContext2D;

	constructor(from:Vector, to:Vector, canvas:CanvasRenderingContext2D){
		this.from = from;
		this.to = to;
		this.canvas = canvas;
	}

	draw()
	{
		this.canvas.beginPath();
		this.canvas.rect(this.from.x,this.from.y,(this.to.x -this.from.x), (this.to.y - this.from.y));
		this.canvas.stroke();
		this.canvas.closePath();
	}
}