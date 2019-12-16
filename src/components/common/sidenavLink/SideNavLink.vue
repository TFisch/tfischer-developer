<template>
  <router-link class="side-nav-link" :to="url" exact>
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
  color: #5680e9;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
}

.side-nav-link:hover {
  background-color: rgb(53, 52, 52);
  color: #84ceeb;
}

.router-link-exact-active {
  background-color: rgb(53, 52, 52);
  color: #84ceeb;
  border-left: solid #84ceeb 3px;
}

.router-link-active {
  background-color: rgb(53, 52, 52);
  color: #84ceeb;
  border-left: solid #84ceeb 3px;
}

/* .side-nav-link:hover {
  background-color: aliceblue;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  color: black;
  opacity: 0.3;
} */
</style>

