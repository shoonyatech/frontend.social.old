<template>
  <div class="sign-in">
    <h2>Sign in to see customized results for you</h2>
    <facebook-login></facebook-login>
  </div>
</template>





<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import FacebookLogin from "@/components/FacebookLogin.vue"; // @ is an alias to /src

@Component({
  components: {
    FacebookLogin,
  },
})
export default class Header extends Vue {
  private isSignedIn: boolean;

  constructor() {
    super();
    this.isSignedIn = false;
  }
}
</script>


<style scoped lang="scss">
</style>
