<template>
  <div class="home">
    <SideNav/>
    <div class="dashboard">
      <h1 class="hello">Hello!</h1>
      <div class="home-bio">
        <p class="home-bio-content">{{homeBio}}</p>
      </div>
      <div class="priorities-wrapper">
        <section class="column-one">
          <v-icon class="icon">whatshot</v-icon>
          <h2>What's Hot?</h2>
          <p>The world of web design is constantly evolving and it takes a vigilant student to keep! I challenge myself to learn JavaScript's new frameworks and libraries while also refining past skills.</p>
        </section>
        <section class="column-two">
          <v-icon class="icon">devices</v-icon>
          <h2>Content For All!</h2>
          <p>{{columnOne}}</p>
        </section>
        <section class="column-three">
          <v-icon class="icon">group</v-icon>
          <h2>Collaborative</h2>
          <p>{{columnOne}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "../../components/sidenav/SideNav";
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "Home",
  components: {
    SideNav,
    MenuIcon
  },
  data() {
    return {
      homeBio:
        "My name is Tim and I'm a JavaScript developer living in Saint Louis, Missouri. I love creating websites and applications that are intuitive and accessible to everyone. I've been very fortunate to work alongside and learn from some very talented programmers.",
      columnOne:
        "xercitation ullamco laboris nisi ut ali. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      columnTwo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      columnThree:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    };
  }
};
</script>

<style scoped>
.hello {
  color: orange;
}
.dashboard {
  height: 100%;
  width: 80%;
  margin-left: 240px;
}
.home-bio {
  margin: auto;
}
.home-bio-content {
  margin: 10%;
}
.column-one,
.column-two,
.column-three {
  border: solid black 1px;
  height: 100%;
  width: 100%;
}

.priorities-wrapper {
  border: solid pink 1px;
  display: flex;
  justify-content: space-around;
  height: 430px;
  width: 80%;
  margin: auto;
}

.icon {
  color: pink;
  font-size: 4em;
}
</style>


