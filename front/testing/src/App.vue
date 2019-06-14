<template>
  <div id="app">
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

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
