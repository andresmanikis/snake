type Coordinate = [number, number];

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function calculateNextHead(
  currentHead: Coordinate,
  direction: Direction
): Coordinate {
  switch (direction) {
    case Direction.Right:
      return [currentHead[0], currentHead[1] + 1];
    case Direction.Down:
      return [currentHead[0] + 1, currentHead[1]];
  }
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
    const nextHead: Coordinate = calculateNextHead(currentHead, direction);

    this.location = [...this.location.slice(1), nextHead];
  }
}
