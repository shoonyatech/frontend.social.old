<template>
  <div class="text-xs host">
    <span>{{ label }}</span
    ><span class="value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  components: {},
};
</script>

<style scoped>
.host {
  display: inline-block;
  width: 100%;
}

.value {
  float: right;
}
</style>
