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
  height: 100%;
}

body {
  font-family: "Quicksand", sans-serif;
  margin: 0;
  padding: 0;
  background: rgb(214, 214, 214);
}

p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #fff;
  font-weight: 600;
}

h1 {
  color: #313948;
  font-size: 4.5rem;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h2 {
  color: #fff;
  font-size: 3.5rem;
  margin: 0;
  padding-top: 100px;
  font-family: "Quicksand", sans-serif;
}

.page-header {
  padding-top: 40px;
  text-shadow: 2.5px 2.5px rgb(255, 255, 255);
}

.dashboard {
  height: 100vh;
  width: 100%;
}
</style>
