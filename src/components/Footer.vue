<template>
  <div class="footer">
    <div class="links"></div>
    <div class="copyright">Powered by Shoonya Technologies Ltd. © 2019 All Rights Reserved</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  display: block;
  height: 150px;
  width: 100%;
  border-top: 2px solid #aada18;

  .links {
    text-align: left;
    color: #aada18;
    font-size: 28px;
    height: 75px;
    padding-top: 10px;
    margin: 10px;
    width: 250px;
  }

  .copyright {
    background-color: #aada18;
    height: 35px;
    color: #fff;
    padding-top: 13px;
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
