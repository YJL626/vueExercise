<template>
  <div id="app">
    <div class="heaterItem-container">
      <HeaterItem
        v-for="(drumPianoItemList, index) in drumPianoList"
        :key="index"
        :drumPianoItemList="drumPianoItemList"
        :currentInstruments="currentInstruments"
      />
    </div>
    <div class="control-container">
      <Range
        :rangeBlockPlace="rangeBlockPlace"
        @range-move="refreshRangeBlockPlace"
        class="range"
      />
      <button @click="musicalInstrumentChange">1111</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaterItem from "@/components/HeaterItem.vue";
import Range from "@/components/Range.vue";
import { drumPianoList } from "@/store/store.ts";

@Component({
  components: {
    HeaterItem,
    Range,
  },
})
export default class App extends Vue {
  drumPianoList = drumPianoList;
  currentInstruments = 0;
  rangeBlockPlace = 0.5;
  musicalInstrumentChange(value: number) {
    this.currentInstruments = 1;
    if (this.currentInstruments) {
      console.log(1);
      
      this.currentInstruments = 1;
    } else {
      this.currentInstruments = 0;
    }
  }
  refreshRangeBlockPlace(value: number) {
    this.rangeBlockPlace = value;
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/variable.scss";
#app {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 500px;
  margin: 0 auto;
  border: 5px solid #ffa500;
  background-color: $container-color;
  .heaterItem-container {
    flex: 1 1 50%;
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 1 1 33%;
    }
  }
  .control-container {
    flex: 1 1 30%;
    .range {
      width: 90%;
    }
  }
}
</style>
