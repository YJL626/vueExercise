<template>
  <div
    class="range-container"
    ref="container"
    @pointerdown="pointerdown($event)"
    @pointerup="pointerup($event)"
    @pointermove="pointermove($event)"
  >
    <span ref="rangeBlock"></span>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["rangeBlockPlace"],
  watch: {
    rangeBlockPlace() {
      this.setChange();
    },
  },
})
export default class Range extends Vue {
  containerWidth = null;
  downPointerId = null;
  sliderWidth = null;
  boxLeft = null;
  containerBlank = 0.02;
  mounted() {
    this.containerWidth = this.$refs.container.getBoundingClientRect().width;
    const blank = this.containerWidth * this.containerBlank; //根据预设值获取空白区域
    this.containerWidth = this.containerWidth - blank * 2; //宽度减去，应空白区域
    this.boxLeft = this.$refs.container.getBoundingClientRect().left + blank; //加上左边的空白区域
    this.sliderWidth = this.$refs.rangeBlock.getBoundingClientRect().width; //获取滑块的宽度
    this.$refs.rangeBlock.style.marginLeft = blank + "px"; //设置左侧间距
    this.setChange();
  }
  get currentBlockExactPlace() {
    return this.containerWidth * this.rangeBlockPlace; //获取值
  }
  setChange() {
    this.$refs.rangeBlock.style.transform = `translate(${
      this.currentBlockExactPlace - this.sliderWidth / 2
    }px,-25%)`; //应用值的位置
  }
  emitRangePlace(value) {
    let ratio = Math.min(value / this.containerWidth, 1); //外部只接受百分数将传入的值转化为百分数；
    ratio = Math.max(ratio, 0);
    this.$emit("range-move", ratio);
  }
  pointerdown({ x, pointerId }) {
    if (this.downPointerId) return;
    event.oldBlockExactPlace = this.currentBlockExactPlace;
    this.downPointerId = pointerId;
    this.$refs.container.setPointerCapture(pointerId);
    this.emitRangePlace(event.x - this.boxLeft);
  }
  pointerup() {
    this.downPointerId = null;
  }
  pointermove({ pointerId, x }) {
    if (this.downPointerId !== pointerId) return;
    this.emitRangePlace(x - this.boxLeft);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/variable.scss";
.range-container {
  box-sizing: border-box;
  width: 20%;
  height: 10px;
  margin: 0 auto;
  border-radius: 3px;
  background-color: $range-color;
  touch-action: none;
  box-shadow: 1px 2px 5px 0 black;
  span {
    display: inline-block;
    min-width: 10px;
    height: 300%;
    border-radius: 3px;
    background-color: #00f;
    transform: translateY(-25%);
    cursor: pointer;
  }
}
</style>