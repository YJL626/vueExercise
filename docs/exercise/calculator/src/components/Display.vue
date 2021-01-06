<template>
  <div class="display">
    <p class="value">{{ value }}</p>
    <p class="input">{{ input }}</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Display",
  props: ["input", "value"],
})
export default class Display extends Vue {
  input!: string;
  value!: string;
}
</script>
<style scoped lang="scss">
@import "~@/assets/variable.scss";

p {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:nth-child(1) {
    line-height: 1;
    height: 50%;
    font-size: 18px;
    color: $calculator-value-color;
  }
  &:nth-child(2) {
    color: #fff;
    height: 50%;

    font-size: 22px;
  }
}
</style>