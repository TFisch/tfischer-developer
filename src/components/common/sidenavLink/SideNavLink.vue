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
  text-shadow: 2px 2px #000000;
  font-size: 1.8em;
  padding: 8px;
  color: #ffffff;
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
  text-shadow: none;
  opacity: 0.3;
}
</style>

