export enum ExceptionType {
  External = "External",
  Internal = "Internal"
}

export class Exception extends Error {
  constructor(private type: ExceptionType, description?: string) {
    super("");
    this.description(description || "Unknown error exception");
  }

  public description(desc: string) {
    this.message = this.format(desc);
    return this;
  }

  public error(err: Error) {
    this.message = this.format(`${err.message}\n  ${err.stack}`);
    return this;
  }

  private format(description: string) {
    return `${this.type}: ${description}`;
  }
}
