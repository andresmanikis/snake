type Coordinate = [number, number];

export class AbruptDirectionChangeError extends Error {}
export class BumpedIntoMyselfError extends Error {}

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

function hasCoordinate(
  coordinates: Coordinate[],
  coordinate: Coordinate
): boolean {
  return (
    coordinates.find(
      (c) => c[0] === coordinate[0] && c[1] === coordinate[1]
    ) !== undefined
  );
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

    if (this.isAlreadyIn(nextHead)) {
      throw new BumpedIntoMyselfError();
    }

    this.location = [...this.location.slice(1), nextHead];
  }

  private isAlreadyIn(coordinate: Coordinate) {
    return hasCoordinate(this.location, coordinate);
  }

  setDirection(direction: Direction): void {
    switch (this.currentDirection) {
      case Direction.Right:
        if (direction === Direction.Left) {
          throw new AbruptDirectionChangeError();
        }
        break;
      case Direction.Left:
        if (direction === Direction.Right) {
          throw new AbruptDirectionChangeError();
        }
        break;
      case Direction.Up:
        if (direction === Direction.Down) {
          throw new AbruptDirectionChangeError();
        }
        break;
      case Direction.Down:
        if (direction === Direction.Up) {
          throw new AbruptDirectionChangeError();
        }
        break;
    }

    this.currentDirection = direction;
  }
}
