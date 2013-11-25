class Vector {
	public x: number;
	public y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	difference(from: Vector, to: Vector) {
		return new Vector(from.x - to.x, from.y - to.y);
	}
}