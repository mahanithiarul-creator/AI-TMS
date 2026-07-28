export class ConfigurationEntry {
  constructor(
    public readonly key: string,
    public readonly value: string,
    public readonly version: number,
    public readonly updatedAt: Date,
    public readonly updatedBy: string,
  ) {}
}
