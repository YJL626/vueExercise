<template>
  <div class="time-length-item">
    <h3>{{ type }}</h3>
    <div class="button-container">
      <span @click="$emit('change', value - 1, type)">-</span>
      <span @click="emitChange">{{ value }}</span>
      <span @click="$emit('change', value + 1, type)">+</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Timelength",
  props: ["value", "type"],
  emits: ["change"],
})
export default class Timelength extends Vue {
  value!: string;
  type!: string;
  emitChange() {
    const putValue = prompt("输入自定义值", this.value);
    // @ts-ignore
    if (isNaN(putValue)) return; //非法值忽略
    this.$emit("change", putValue, this.type);
  }
}
</script>
<style scoped lang="scss">
.time-length-item {
  font-size: 20px;
  h3 {
    text-align: center;
  }
  .button-container {
    display: flex;
    justify-content: center;
    span {
      padding: 5px;
      margin: 10 20px;
      &:nth-child(2n + 1) {
        cursor: pointer;
      }
    }
  }
}
</style>