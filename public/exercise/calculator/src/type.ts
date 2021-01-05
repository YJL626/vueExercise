export enum buttonType {
  valueButton,
  signButton,
  ACButton,
  computedButton,
}

export class CalculatorButton {
  public readonly color: string;
  public readonly type: string;
  public readonly value: string;
  constructor(type: string, value: string, color: string) {
    this.color = color;
    this.type = type;
    this.value = value;
  }
}
