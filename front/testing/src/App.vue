<template>
  <div id="app">
    <div class="container-fluid" v-on:click="resetInnerSearches">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue} from "vue-property-decorator";


  export default class App extends Vue {
    resetInnerSearches(event: MouseEvent) {
      const wrapper = document.querySelector(".inner-search-results");

      if (wrapper == null) {
        return;
      }
      if (!wrapper.contains(event.srcElement)) {
        wrapper.querySelector('.close .fas').click()
      }
    }
  }

</script>

<style lang="scss">
$background: white;
$border1: #87c0cd;
$border2: #226597;
$border3: #113f67;

body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background: $background;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
}
</style>
