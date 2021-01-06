<template>
  <div class="button" ref="button" @click="$emit('btn-click', buttonConfig)">
    {{ checkValue(buttonConfig.value) }}
  </div>
</template>
<script lang="ts">
import { CalculatorButton } from "@/type";
import { Options, Vue } from "vue-class-component";
@Options({
  name: "CalculatorBTN",
  emits: ["btn-click"],
  props: {
    buttonConfig: {
      default: {
        color: "#000",
        type: "sign",
        value: 0,
      },
    },
    index: {
      default: 0,
    },
  },
})
export default class CalculatorBTN extends Vue {
  buttonConfig!: CalculatorButton;
  index!: number;
  mounted() {
    (this.$refs.button as HTMLDivElement).style.gridArea = String.fromCharCode(
      "a".charCodeAt(0) + this.index
    );
    (this.$refs
      .button as HTMLDivElement).style.background = this.buttonConfig.color;
  }
  checkValue(value: string) {
    return value === "*" ? "X" : value;
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/variable.scss";
.button {
  color: $button-color;
  &:hover {
    border: 1px solid #fff;
    transform: scale(1.02);
  }
}
</style>