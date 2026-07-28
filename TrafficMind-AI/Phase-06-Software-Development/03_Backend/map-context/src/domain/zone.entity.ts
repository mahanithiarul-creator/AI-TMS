export class Coordinate {
  constructor(public readonly latitude: number, public readonly longitude: number) {}
}

export class Zone {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly boundaries: Coordinate[], // Simplified polygon
  ) {}

  // A real GIS implementation would use ray-casting algorithm or PostGIS ST_Contains
  // For Sprint 3, we simulate it with a simple bounding box or distance check.
}
