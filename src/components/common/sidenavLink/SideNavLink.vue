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
  text-decoration: none;
}
</style>

