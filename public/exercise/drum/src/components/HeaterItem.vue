<template>
  <div>
    <audio :src="src" ref="audio" />
    <button @click="play()">11</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["drumPianoItemList", "currentInstruments"],
})
export default class HeaterItem extends Vue {
  drumPianoItemList!: [any, any];
  currentInstruments!: number;
  get src() {
    console.log(this.drumPianoItemList, this.currentInstruments);

    return this.drumPianoItemList[this.currentInstruments].url;
  }
  play(this: any) {
    this.$refs.audio.play();
  }
}
</script>

<style scoped lang="scss">
</style>