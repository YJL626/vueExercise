<template>
  <div class="clock-container">
    <div class="backgroud">
      <div class="inner" ref="bakcground"></div>
    </div>
    <p @click="$emit('click')">{{ clockType }}</p>
    <p @click="$emit('click')">{{ clockTime }}</p>
    <div class="control">
      <p @click="$emit('click')">start/pause</p>
      <p @click="$emit('reset')">reset</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Clock",
  emits: ["click", "reset"],
  props: {
    clockType: {
      type: String,
    },
    clockTime: {
      type: String,
    },
    ratio: {
      type: Number,
    },
  },
  watch: {
    clockType(this: Clock) {
      this.setColor();
    },
    ratio(this: Clock) {
      this.setHeight();
    },
  },
})
export default class Clock extends Vue {
  clockType!: string;
  clockTime!: string;
  ratio!: number;
  startColor = "#FFA500";
  willEndColor = "#008000";
  a!: any;
  mounted() {
    this.setColor();
  }
  created() {}
  setColor() {
    this.clockType === "Session"
      ? ((this.$refs
          .bakcground as HTMLDivElement).style.background = this.startColor)
      : ((this.$refs
          .bakcground as HTMLDivElement).style.background = this.willEndColor);
  }
  setHeight() {
    (this.$refs.bakcground as HTMLDivElement).style.height =
      this.ratio * 100 + "%";
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/variable.scss";
.clock-container {
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 336px;
  max-width: 100%;
  height: 336px;
  padding: 5px;
  border: 2px solid $start-color;
  border-radius: 50%;
  margin: 0 auto;
  -webkit-tap-highlight-color: transparent;
  .backgroud {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    top: 15px;
    border-radius: 50%;
    /* padding: 10px; */
    overflow: hidden;
    .inner {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      width: 100%;
      background: chartreuse;
      background-clip: content-box;
    }
  }
  & > :nth-child(2) {
    margin-top: -80px;
  }
  p {
    cursor: pointer;
    position: relative;
    z-index: 1;
    font-size: 28px;
    text-align: center;
  }
  .control {
    position: absolute;
    left: 25%;
    right: 25%;
    bottom: 5%;
    & > :nth-child(1) {
      margin-bottom: 10px;
    }
  }
}
</style>