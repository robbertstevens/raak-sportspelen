class Vector {
	public x: number;
	public y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	public difference(target: Vector) {
		return new Vector(target.x - this.x, target.y -this.y);
	}
}