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
  display: flex;
}

html,
body {
  background: #313948;
  font-family: "Quicksand", sans-serif;
  margin: 0;
  padding: 0;
}

p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: "#FFF";
}

h1 {
  color: #50c9ce;
  font-size: 4.5rem;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.page-header {
  padding-top: 10px;
  text-shadow: 2px 2px rgba(241, 241, 241, 0.8);
}

.dashboard {
  margin-left: 20vw;
  height: 100vh;
  width: 100%;
}
</style>
