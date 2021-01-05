<template>
  <div class="box">
    <h3>{{ name }}</h3>
    <div class="container">
      <div class="block" :class="{ off: !isOn }" @click="$emit('click')"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    isOn: {
      default: true,
    },
    name: {
      default: "name",
    },
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.container {
  overflow: hidden;
  box-sizing: border-box;
  width: 54px;
  padding: 2px 3px;
  margin: 0 auto;
  background: #000;
  position: relative;

  .block {
    width: 23px;
    height: 20px;
    cursor: pointer;
    background: #00f;
  }
  .off {
    float: right;
  }
}
h3 {
  text-align: center;
}
</style>