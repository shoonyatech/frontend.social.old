<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
html {
  font-size: 22px;
}

body {
  margin: 0;
  padding: 0;
  color: #ccc;
  box-sizing: border-box;
}

* {
  font-family: 'Consolas', 'Inconsolata', monospace;
}

#app {
  font-family: 'Consolas', 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.icon-button {
  background-color: #aada20;
  border: 3px solid white;
  height: 66px;
  width: 66px;
  border-radius: 50%;
  padding: 10px;
}

.page {
  min-height: 920px;
}

.text-sm {
  font-size: 0.75rem;
}

.text-xs {
  font-size: 0.6rem;
}

.left {
  display: inline-block;
  justify-content: left;
  text-align: left;
}

.right {
  display: inline-block;
  justify-content: right;
  text-align: right;
}
</style>
