<template>
  <div class="root-container">
    <Display class="display" :input="inputNumber" :value="showValue" />
    <div class="button-container">
      <CalculatorBTN
        v-for="(buttonData, index) in buttonList"
        :key="index"
        :buttonConfig="buttonData"
        :index="index"
        @btn-click="btnClick"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Display from "@/components/Display.vue";
import CalculatorBTN from "@/components/CalculatorBTN.vue";

import { buttonList } from "@/store/store.ts";
import { CalculatorButton, buttonType } from "./type";

@Options({
  props: {},

  components: {
    Display,
    CalculatorBTN,
  },
})
export default class App extends Vue {
  buttonList = buttonList;
  showValue = ""; //最终展示
  inputNumber = "0"; //正在输入的部分
  value = ""; //已经推上去的部分
  btnClick({ type, value } = { type: "string", value: "string" }) {
    switch (type) {
      case "ACButton":
        this.value = "";
        this.inputNumber = "0";
        break;
      case "valueButton":
        if (~this.inputNumber.indexOf(".") && value === ".") return;
        this.value = this.value.replace(/^[\*\/]/, ""); //已经推上去的部分开头有不和规则的运算符将其删除；
        /^[\+\-\*\/0]$/.test(this.inputNumber) //有运算符和零直接替换
          ? (this.inputNumber = value)
          : (this.inputNumber += value);

        break;
      case "signButton":
        /^[\+\-\*\/0]$/.test(this.inputNumber) //输入框只有运算符和加减就忽略；
          ? null
          : (this.value += this.inputNumber);
        this.value = this.value.replace(/^[\*\/]/, ""); //已经推上去的部分开头有不和规则的运算符将其删除；
        /[\+\-\*\/]$/.test(this.value)
          ? (this.value = this.value.replace(/.$/, value))
          : (this.value += value);
        this.inputNumber = this.value[this.value.length - 1]; //下方输入框被清空了，取最后一个运算符占位
        break;
      case "computedButton":
        if (/\=/.test(this.showValue)) return;
        if (/[\+\-\*\/]$/.test(this.showValue)) {
          //末尾有运算符则去除
          this.showValue = this.showValue.replace(/.$/, "");
        }
        this.showValue = this.showValue.replace(/^[\*\/]/, ""); //开头有不合规则的运算则去除
        const result = new Function(`return ${this.showValue} `)() + "";

        this.showValue = this.showValue + "=" + result;
        this.value = "";
        this.inputNumber = result;
        return;
    }
    this.showValue = /^[\+\-\*\/0]$/.test(this.inputNumber)
      ? this.value
      : this.value + this.inputNumber;
  }
}
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
  user-select: none;
  background-color: $calculator-color;
  .display {
    height: 20%;
  }
  .button-container {
    display: grid;
    grid-template-areas:
      "a a b c"
      "d e f g"
      "h i j k"
      "l m n o"
      "p p q o";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 2px;
    width: 100%;
    height: 80%;
    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>