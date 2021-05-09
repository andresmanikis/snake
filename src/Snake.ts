type Coordinate = [number, number];

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}
export class Snake {
  constructor(private location: Coordinate[]) {}

  getLocation(): Coordinate[] {
    return this.location;
  }

  private getHead() {
    return this.location[this.location.length - 1];
  }

  move(direction: Direction): void {
    const currentHead = this.getHead();
    const nextHead: Coordinate = [currentHead[0], currentHead[1] + 1];

    this.location = [...this.location.slice(1), nextHead];
  }
}
