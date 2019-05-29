<template>
  <div class="dashboard">
    <SideNav/>
    <h1 class="home">Experience</h1>
    <div class="exp-row row-languages">
      <h2 class="exp-subhead">Languages</h2>
      <div class="icon-wrapper">
        <img src="https://via.placeholder.com/150">
        <img src="https://via.placeholder.com/150">
        <img src="https://via.placeholder.com/150">
      </div>
    </div>
    <div class="exp-row row-javascript">
      <h2 class="exp-subhead">JavaScript</h2>
      <div class="icon-wrapper">
        <img src="https://via.placeholder.com/150">
        <img src="https://via.placeholder.com/150">
        <img src="https://via.placeholder.com/150">
      </div>
    </div>
    <div class="exp-row row-tools">
      <h2 class="exp-subhead">Tools</h2>
      <div class="icon-wrapper">
        <img src="https://via.placeholder.com/150">
        <img src="https://via.placeholder.com/150">
        <img src="https://via.placeholder.com/150">
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "../../components/sidenav/SideNav";

export default {
  name: "Experience",
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
  padding-left: 20vw;
}
.dashboard {
  height: 100vh;
  width: 100%;
}
.exp-row {
  width: 100%;
  height: 250px;
  background: lime;
}
.exp-subhead {
  padding-left: 20vw;
}
.icon-wrapper {
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding-left: 20vw;
}
</style>