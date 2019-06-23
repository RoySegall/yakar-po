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
    /**
     * Handling click on the page so we can close the search results in the inner pages.
     *
     * @param event
     *  The event object.
     */
    resetInnerSearches(event: MouseEvent) {
      // Getting the wrapper of the inner search.
      const wrapper = document.querySelector(".inner-search-results");

      if (wrapper == null) {
        // No inner search appear so we don't need to handle it furthur.
        return;
      }

      if (wrapper.contains(event.srcElement)) {
        // The element we clicked is a child of the cart. That's mean we don't need to close the search result box.
        return;
      }

      // So, the user clicked outside the search box. Click on the closing button.
      wrapper.querySelector('.close .fas').click();
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
