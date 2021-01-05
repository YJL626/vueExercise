<template>
  <div class="display">
    <p>1</p>
    <p>2</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {},
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
@import "~@/assets/variable.scss";
.display {
  height: 70px;
}
p {
  text-align: right;
  &:nth-child(1) {
    line-height: 35px;
    font-size: 18px;
    color: $calculator-value-color;
  }
  &:nth-child(2) {
    color: #fff;
    line-height: 35px;
    font-size: 22px;
  }
}
</style>