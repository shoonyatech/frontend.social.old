<template>
  <div class="home">
    <div
      class="msg"
    >We are building a one stop platform for frontend developers and designers. Please check back in few days!</div>
    <div class="msg">
      If you want to contribute to this community effort, please email
      <b>contact@shoonya.ca</b>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.msg {
  margin: 50px 10px;
  color: #aada18;
  font-size: 28px;
}
</style>
