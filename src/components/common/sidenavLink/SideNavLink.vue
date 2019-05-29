<template>
  <router-link class="side-nav-link" :to="url">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "SideNavLink",
  props: ["url"]
};
</script>
<style scoped>
.side-nav-link {
  background: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.8em;
  padding: 8px;
  color: #50c9ce;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
}

.router-link-exact-active {
  background: #000000;
  opacity: 0.6;
}

.side-nav-link:hover {
  background-color: aliceblue;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  color: black;
  opacity: 0.3;
}
</style>

