type Coordinate = [number, number];

export class Snake {
  constructor(private initialLocation: Coordinate[]) {}

  getLocation(): Coordinate[] {
    return this.initialLocation;
  }
}