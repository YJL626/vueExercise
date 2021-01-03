<template>
  <div class="list-group mt-4">
    <a
      :href="item.src"
      class="list-group-item h5 mb-0"
      :class="{ ['list-group-item-action']: 1, active: 0 }"
      v-for="item in exerciseList"
      :key="item.cTime"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Exercise } from "@/type";

@Options({
  components: {},
  props: ["exerciseList"],
})
export default class DemoList extends Vue {
  exerciseList!: Exercise[];
}
</script>

<style lang="scss">
</style>
