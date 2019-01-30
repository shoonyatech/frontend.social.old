<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>
