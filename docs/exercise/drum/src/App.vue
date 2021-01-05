<template>
  <div id="app">
    <div class="heaterItem-container">
      <HeaterItem
        v-for="(drumPianoItemList, index) in drumPianoList"
        @is-play="isPlay"
        :key="index"
        :drumPianoItemList="drumPianoItemList"
        :currentInstruments="currentInstruments"
        :volume="rangeBlockPlace"
        :muted="muted"
      />
    </div>
    <div class="control-container">
      <Swich @click="muted = !muted" :isOn="!muted" name="power" />
      <Range
        :rangeBlockPlace="rangeBlockPlace"
        @range-move="refreshRangeBlockPlace"
        class="range"
      />
      <h3 class="message">{{ message }}</h3>
      <Swich
        @click="musicalInstrumentChange"
        name="piano  durm  swich"
        :isOn="!currentInstruments"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaterItem from "@/components/HeaterItem.vue";
import Swich from "@/components/Swich.vue";
import Range from "@/components/Range.vue";
import { drumPianoList } from "@/store/store.ts";

@Component({
  components: {
    HeaterItem,
    Range,
    Swich,
  },
})
export default class App extends Vue {
  drumPianoList = drumPianoList;
  currentInstruments = 0;
  rangeBlockPlace = 0.5;
  muted = false;
  message = "";
  mounted() {
    window.addEventListener("keydown", (event) => {
      (this as any).$bus.$emit("keydown", event.keyCode);
    });
  }
  musicalInstrumentChange() {
    if (this.currentInstruments) {
      this.currentInstruments = 0;
    } else {
      this.currentInstruments = 1;
    }
  }
  refreshRangeBlockPlace(value: number) {
    this.rangeBlockPlace = value;
  }
  isPlay(value: string) {
    this.message = value;
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/variable.scss";
#app {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 720px;
  max-width: 90%;
  margin: 0 auto;
  padding: 15px 30px;
  border: 5px solid #ffa500;
  background-color: $container-color;
  .heaterItem-container {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 90%;
    gap: 8px;
    flex: 1 1 330px;
    padding: 15px;
    & > * {
      flex: 1 1 33%;
    }
  }
  .control-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 330px;
    flex: 1 1 330px;
    height: 100%;
    & > * {
      margin-top: 20px;
    }
    .range {
      width: 90%;
    }
    .message {
      width: 90%;
      height: 60px;
      line-height: 60px;
      margin: 20px auto;
      text-align: center;
      border-radius: 2px;
      background: $background-color;
    }
  }
}
@media screen and(max-width: 900px) {
  #app {
    width: 375px;
    padding: 20px 0;
    flex-wrap: wrap;
    .heaterItem-container {
      padding: 0;
      margin: 0;
      flex: 1;
    }
  }
}
</style>
