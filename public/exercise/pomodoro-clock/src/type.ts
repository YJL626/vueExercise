export enum clockState {
  isReady,
  running,
  stopped,
  end,
}
export enum clockType {
  Session,
  Break,
}
export class ClockItem {
  readonly type: string;

  pastTime: number;
  readonly totalTime: number;

  protected timer: null | number = null;
  protected intervalMs: number = 0;
  state: string = clockState[0];

  constructor(minute: number, type: number = 0) {

    this.type = clockType[type];
    this.totalTime = minute * 60 * 1000;
    this.pastTime = 0;
  }
  get remainingTime() {
    return this.totalTime - this.pastTime;
  }
  get clockValue() {
    let minute: string | number = Math.floor(this.remainingTime / 1000 / 60);
    minute < 10 ? (minute = "0" + minute) : null;
    let second: string | number = Math.floor(
      (this.remainingTime % 60000) / 1000
    );
    second < 10 ? (second = "0" + second) : null;

    return minute + ":" + second;
  }
  start() {
    this.state = clockState[1];
    this.run();
  }
  protected run() {
    this.intervalMs = Date.now(); //初始化
    this.timer = setTimeout(() => {
      this.pastTime += Date.now() - this.intervalMs; //获取过去了多久把过去的时间加到past-time上
      this.pastTime < this.totalTime
        ? this.run() //循环调用
        : (this.state = clockState[3]);
    });
  }
  pause() {
    this.state = clockState[2];
    this.timer !== null && clearTimeout(this.timer);
  }
}
