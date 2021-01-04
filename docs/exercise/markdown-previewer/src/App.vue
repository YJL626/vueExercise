<template>
  <div id="app">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col class="text" :xs="20" :sm="14" :lg="12" :xl="7">
        <h2 class="title">Edit</h2>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col class="text" :xs="20" :sm="14" :lg="12" :xl="7">
        <el-input
          class="text-container markdown-input"
          type="textarea"
          :rows="15"
          placeholder="请输入内容"
          v-model="textarea"
      /></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col class="text" :xs="22" :sm="16" :lg="14" :xl="8">
        <h2 class="title">Previewer</h2>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="22" :sm="16" :lg="14" :xl="8">
        <div class="text-container previewer" ref="previewer"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import placehoderValue from "@/common/ts/placehoderValue";
const marked = require("marked");
@Component<any>({
  components: {},
  watch: {
    textarea(this: App) {
      this.syncInputPreviewer();
    },
  },
})
export default class App extends Vue {
  textarea = placehoderValue;
  get transformedValue() {
    return marked(this.textarea);
  }
  syncInputPreviewer(this: any) {
    this.$refs.previewer.innerHTML = this.transformedValue;
  }
  mounted() {
    this.syncInputPreviewer();
  }
}
</script>

<style lang="scss">
@import "@/assets/css/variable.scss";
#app {
  .text-container {
    border: 1px solid #000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.5);
    background: $success-color;
    & > * {
      background: $success-color;
      color: $import-font-color;
    }
  }
  .title {
    margin: 15px 0 0 0;
    padding-left: 15px;
    border: 1px solid #000;
    border-bottom: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.5);
  }
}

.markdown-input {
  font-size: 20px;
  font-weight: 500;
}
</style>
