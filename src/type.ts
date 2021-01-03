export class Exercise {
  constructor(
    readonly title: string,
    readonly src: string,
    readonly cTime: number = performance.now()
  ) {}
}
