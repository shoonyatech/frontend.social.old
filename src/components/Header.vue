<template>
  <div class="header">
    <div class="logo">
      <span class="frontend">frontend</span>
      <span class="social">social</span>
    </div>
    <div class="menu">
      <span class="menu-item">Learn</span>
      <span class="menu-item">Jobs</span>
      <span class="menu-item">Interview Help</span>
      <span class="menu-item">Code Challenge</span>
      <span class="menu-item">Conferences</span>
      <span class="menu-item">City</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.header {
  display: block;
  height: 65px;
  width: 100%;
  border-bottom: 7px solid #aada18;

  .logo {
    text-align: left;
    color: #aada18;
    font-size: 28px;
    height: 50px;
    padding-top: 10px;
    margin: 10px;
    width: 250px;

    .frontend {
      font-weight: bold;
      margin: 0 10px;
    }
  }

  .menu {
    text-align: right;
    float: right;
    margin-top: -60px;

    .menu-item {
      color: #aada18;
      font-size: 25px;
      margin: 10px 30px;
    }
  }
}
</style>
