<template>
  <nav id="side-nav">
    <img src="../../assets/profile.png" class="profile-icon" alt="Headshot of Designer">
    <div class="nav-link-wrapper">
      <SideNavLink url="/home">About</SideNavLink>
      <SideNavLink url="/home">Experience</SideNavLink>
      <SideNavLink url="/home">This Site</SideNavLink>
      <SideNavLink url="/home">Projects</SideNavLink>
      <SideNavLink url="/home">Education</SideNavLink>
      <SideNavLink url="/home">Contact</SideNavLink>
    </div>
  </nav>
</template>
<script>
import SideNavLink from "../../components/common/sidenavLink/SideNavLink";

export default {
  name: "SideNav",
  components: {
    SideNavLink
  }
};
</script>
<style scoped>
#side-nav {
  background-image: url("../../assets/astronomy-desktop.jpg");
  background-size: cover;
  opacity: 0.7;
  margin: 0;
  font-weight: bold;
  padding-top: 20px;
  overflow: auto;
  font-family: "Quicksand", sans-serif;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  max-width: 200px;
  -webkit-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.75);
}

.nav-link-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
}

.profile-icon {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: solid black 1px;
}
</style>
