<template>
  <div id="app">
    <SideNav/>

    <router-view/>
  </div>
</template>

<script>
import SideNav from "./components/sidenav/SideNav";

export default {
  name: "App",
  components: {
    SideNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  background-color: #e4e4e4;
  font-family: "Quicksand", sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
