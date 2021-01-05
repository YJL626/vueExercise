<template>
  <div class="root-container">
    <Display class="display" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CalculatorButton, buttonType } from "@/type.ts";
import Display from "@/components/Display.vue";
import { buttonList } from "@/store/store.ts";

console.log(buttonList);

@Options({
  props: {},
  components: {
    Display,
  },
})
export default class App extends Vue {}
</script>
<style scoped lang="scss">
@import "@/assets/variable.scss";
.root-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-350/2 + px, -500/2 + px);

  box-sizing: border-box;
  width: 350px;
  height: 500px;
  margin: 0 auto;
  padding: 5px;
  background-color: $calculator-color;
}
</style>