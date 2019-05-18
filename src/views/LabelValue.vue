<template>
  <div>
    <div class="label">{{ label }}</div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  props: ["label", "value"],
})
export default class LabelValue extends Vue {}
</script>

<style scoped lang="scss">
.label {
  font-size: 1rem;
  margin: 0.75rem;
  height: 1rem;
  display: inline-block;
  width: 5rem;
}

.value {
  font-size: 1rem;
  margin: 0.75rem;
  height: 1rem;
  display: inline-block;
  line-height: 1rem;
  padding-bottom: 3px;

  border-bottom: solid #aada18 1px;
}
</style>
