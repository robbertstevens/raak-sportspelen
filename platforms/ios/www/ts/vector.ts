class Vector {
	public x: number;
	public y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	difference(target: Vector) {
		return new Vector(this.x - target.x, this.y - target.y);
	}
}