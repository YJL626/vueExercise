<template></template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    buttonConfig: {
      default: {
        color: "#000",
        value: 0,
      },
    },
  },
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
</style>