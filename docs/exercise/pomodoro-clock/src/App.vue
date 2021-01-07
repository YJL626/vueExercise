<template>
  <div class="root-container">
    <h1>Pomodoro Clock</h1>
    <div class="time-length-container">
      <TimeLength
        :value="breakLengh"
        type="Break Lengh"
        @change="timeLengthChange"
      />
      <TimeLength
        :value="sessionLengh"
        type="Session Lengh"
        @change="timeLengthChange"
      />
    </div>
    <Clock
      :clockType="clockType"
      :clockTime="clockItem.clockValue"
      :ratio="ratio"
      @click="toggle"
      @reset="reset"
    />
  </div>
  <video src="~@/assets/hit.mp3" class="video" ref="video"></video>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Clock from "@/components/Clock.vue";
import TimeLength from "@/components/TimeLength.vue";
import { clockState, ClockItem } from "@/type.ts";
@Options({
  name: "App",
  props: {},
  components: {
    Clock,
    TimeLength,
  },
  watch: {
    clockState(newValue) {
      if (newValue === "end") {
        this.clockItem =
          this.clockType === "Session"
            ? new ClockItem(this.breakLengh, 1)
            : new ClockItem(this.sessionLengh);
        this.$refs.video.play();
        this.clockItem.start();
      }
    },
  },
})
export default class App extends Vue {
  breakLengh: number = 5;
  sessionLengh: number = 25;
  clockItem: ClockItem = new ClockItem(this.sessionLengh);

  get clockType() {
    return this.clockItem.type;
  }
  get clockState() {
    return this.clockItem.state;
  }
  get clockTime() {
    return this.clockItem.totalTime;
  }
  get ratio() {
    return this.clockItem.pastTime / this.clockItem.totalTime;
  }
  mounted() {}
  timeLengthChange(value: number, type: string) {
    /break/i.test(type) && (this.breakLengh = +value);
    /session/i.test(type) && (this.sessionLengh = +value);
    if (this.breakLengh < 0) this.breakLengh = 1;
    if (this.sessionLengh < 0) this.sessionLengh = 1;
    this.clockState === "running" || this.clockState === "stopped"
      ? null
      : this.reset();
  }
  toggle() {
    "running" !== this.clockState
      ? this.clockItem.start()
      : this.clockItem.pause();
  }
  reset() {
    this.clockItem = new ClockItem(this.sessionLengh);
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/base.scss";
.root-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  flex: 1;
  width: 375px;
  height: 90vh;
  max-height: 688px;
  max-width: 90%;
  color: $base-font-color;
  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 35px;
    font-weight: 800;
  }
  .time-length-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    & > * {
      flex: 1;
    }
  }
}
.video {
  display: none;
}
</style>