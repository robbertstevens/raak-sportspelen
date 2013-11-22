/// <reference path="references.ts" />
class Line implements IDrawable{
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
		this.canvas.moveTo(this.from.x, this.from.y);
		this.canvas.lineTo(this.to.x, this.to.y);
		this.canvas.stroke();
		this.canvas.closePath();
	}
}