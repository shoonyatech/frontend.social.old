<template>
  <div class="header">
    <div class="logo">
      <span class="frontend">frontend</span>
      <span class="social">social</span>
    </div>
    <div class="right-menu">
      <div class="menu">
        <span class="menu-item">Learn</span>
        <span class="menu-item">Jobs</span>
        <span class="menu-item">Interview Help</span>
        <span class="menu-item">Code Challenge</span>
        <span class="menu-item">Conferences</span>
        <span class="menu-item">City</span>
      </div>
      <div class="user-image">
        <img src>
      </div>
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

  .right-menu {
    text-align: right;
    position: fixed;
    right: 80px;
  }

  .menu {
    margin-top: -80px;
    padding-top: 23px;

    .menu-item {
      color: #aada18;
      font-size: 25px;
      margin: 10px 30px;
    }
  }

  .user-image {
    position: fixed;
    right: 25px;
    top: 11px;
    height: 50px;
    width: 50px;
    border: 2px solid #aada18;
    display: inline-block;
    border-radius: 999px;
  }
}
</style>
