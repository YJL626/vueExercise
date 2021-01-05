<template>
  <div
    @click="play"
    class="container"
    :class="{ active: isActive, muted: isActive && !muted }"
  >
    <audio :src="src" ref="audio" />
    <span>{{ currentMusicalIntruments.keyTrigger }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  props: ["drumPianoItemList", "currentInstruments", "volume", "muted"],
  watch: {
    volume(this: HeaterItem) {
      this.syncStatus();
    },
    muted(this: HeaterItem) {
      this.syncStatus();
    },
  },
})
export default class HeaterItem extends Vue {
  drumPianoItemList!: [any, any];
  currentInstruments!: number;
  volume!: number;
  muted!: boolean;
  isActive: boolean = false;
  get src() {
    return this.currentMusicalIntruments.url;
  }
  get currentMusicalIntruments() {
    return this.drumPianoItemList[this.currentInstruments];
  }
  get keyCode() {
    return this.currentMusicalIntruments.keyCode;
  }
  mounted() {
    this.syncStatus();
    (this as any).$bus.$on("keydown", (keyCode: string) => {
      if (this.keyCode === keyCode) this.play();
    });
  }
  syncStatus() {
    (this.$refs.audio as HTMLAudioElement).volume = this.volume;
    (this.$refs.audio as HTMLAudioElement).muted = this.muted;
  }
  play() {
    const audio = this.$refs.audio as HTMLAudioElement;
    audio.currentTime = 0;
    audio.play();
    this.isActive = true;
    this.$emit("is-play", this.currentMusicalIntruments.id);
    setTimeout(() => {
      this.isActive = false;
    }, 200);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/variable.scss";
.container {
  /* width: 100px; */
  line-height: 80px;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  background: $button-color;
  box-shadow: 2px 2px 2px black;
  span {
    font-weight: 800;
  }
}
.active {
  transform: translate(0, 3px);
}
.muted {
  background: orange;
}
</style>