type Coordinate = [number, number];

export enum Direction {
  Up,
  Down,
  Left,
  Right,
  Still,
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
    case Direction.Left:
      return [currentHead[0], currentHead[1] - 1];
    case Direction.Up:
      return [currentHead[0] - 1, currentHead[1]];
    case Direction.Still:
      return currentHead;
  }
}

export class Snake {
  private currentDirection: Direction = Direction.Still;

  constructor(private location: Coordinate[]) {}

  getLocation(): Coordinate[] {
    return this.location;
  }

  private getHead() {
    return this.location[this.location.length - 1];
  }

  move(): void {
    if (this.currentDirection === Direction.Still) {
      return;
    }

    const currentHead = this.getHead();
    const nextHead: Coordinate = calculateNextHead(
      currentHead,
      this.currentDirection
    );

    this.location = [...this.location.slice(1), nextHead];
  }

  setDirection(direction: Direction): void {
    this.currentDirection = direction;
  }
}
