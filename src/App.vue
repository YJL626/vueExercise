<template>
  <div class="container mt-4">
    <h1>demoList</h1>
    <demo-list :exerciseList="exerciseList" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DemoList from "./components/DemoList.vue";
import { exerciseList } from "@/store/store";
import { reactive } from "vue";
@Options({
  components: { DemoList },
})
export default class App extends Vue {
  exerciseList = exerciseList;
}
</script>

<style lang="scss">
</style>
