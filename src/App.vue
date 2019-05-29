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
  background: #313948;
  font-family: "Quicksand", sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
}

p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h1 {
  color: #50c9ce;
  font-size: 3.5rem;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
