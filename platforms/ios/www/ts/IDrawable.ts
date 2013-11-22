/// <reference path="references.ts" />
interface IDrawable{
	from: Vector;
	to: Vector;
	canvas: CanvasRenderingContext2D;

	draw(): void;
}