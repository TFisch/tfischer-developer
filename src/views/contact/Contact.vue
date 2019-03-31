<template>
  <div class="dashboard">
    <h1 class="home">Title</h1>
    <SideNav/>
  </div>
</template>

<script>
import SideNav from "../../components/sidenav/SideNav";

export default {
  name: "Contact",
  components: {
    SideNav
  },
  data() {
    return {
      test: "test data!"
    };
  }
};
</script>

<style scoped>
.home {
  color: orange;
}
.dashboard {
  height: 100vh;
  width: 100%;
}
</style>


