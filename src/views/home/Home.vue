<template>
  <div class="home">
    <div class="dashboard">
      <h1 class="page-header">Hello!</h1>
      <div class="home-bio">
        <p class="home-bio-content">{{homeBio}}</p>
      </div>
      <div class="priorities-wrapper">
        <section class="column-one">
          <div class="column-header-wrapper hot-header">
            <div class="header-shader">
              <h2 class="column-header">What's Hot?</h2>
            </div>
          </div>
          <p class="copy-text">{{columnOne}}</p>
        </section>
        <section class="column-two">
          <div class="column-header-wrapper content-header">
            <div class="header-shader">
              <h2 class="column-header">Content For All!</h2>
            </div>
          </div>
          <p class="copy-text">{{columnTwo}}</p>
        </section>
        <section class="column-three">
          <div class="column-header-wrapper collab-header">
            <div class="header-shader">
              <h2 class="column-header">Collaboration</h2>
            </div>
          </div>
          <p class="copy-text">{{columnThree}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      homeBio:
        "My name is Tim and I'm a JavaScript developer living in Saint Louis, Missouri. I love creating websites and applications that are intuitive and accessible to everyone. I've been very fortunate to work alongside and learn from some very talented programmers.",
      columnOne:
        "The field of web design is constantly evolving and it takes a vigilant student to keep pace! I challenge myself to learn JavaScript's new frameworks and libraries while also refining past skills.",
      columnTwo:
        "With the world of technology becoming increasingly dependent on the internet, it becomes the developer's responsibility to make it accesible to anyone and everyone. There are many tools and practices that I utilize to make this a reality.",
      columnThree:
        "While I've done my share of independent research, Its safe to say I wouldn't be where I am today without a large amount of help from other people. My knowledge owes tribute to those who've mentored, inspired and collaborated with me through out my experiences as an engineer."
    };
  }
};
</script>

<style scoped>
.dashboard {
  height: 100%;
  color: rgb(241, 241, 241);
  width: 80%;
  margin-left: 240px;
}
.page-header {
  padding-top: 10px;
  text-shadow: 2px 2px rgba(241, 241, 241, 0.8);
}
.home-bio {
  margin: auto;
}
.home-bio-content {
  margin: 40px auto;
  max-width: 700px;
  font-size: 1.15rem;
  line-height: 2;
}
.column-one,
.column-two,
.column-three {
  border: solid rgba(80, 201, 206, 0.65) 2px;
  border-radius: 2px;
  height: 90%;
  width: 100%;
  margin: 10px 40px;
  background-color: rgba(19, 22, 31, 0.75);
}
.column-header-wrapper {
  width: 100%;
  height: 100px;
  background-size: cover;
  position: relative;
  z-index: 2;
  text-shadow: 1.5px 1.8px rgba(80, 201, 206, 0.85);
  -webkit-box-shadow: -1px 6px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 6px 5px -2px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 6px 5px -2px rgba(0, 0, 0, 0.75);
}
.column-header {
  color: #fff;
  margin: 0;
  position: absolute;
  font-size: 2rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  text-align: center;
}
.header-shader {
  width: 100%;
  height: 100%;
  background: rgba(38, 42, 43, 0.7);
  position: absolute;
  z-index: 2;
}
.hot-header {
  background-image: url("../../assets/fire_small.png");
  background-position: 60% 60%;
}
.content-header {
  background-image: url("../../assets/city.png");
  background-position: 60% 60%;
}
.collab-header {
  background-image: url("../../assets/collab.jpg");
  background-position: 60% 60%;
}
.priorities-wrapper {
  display: flex;
  justify-content: space-around;
  height: 465px;
  width: 100%;
  margin: auto;
}
.copy-text {
  margin: auto 15px;
  text-align: left;
  color: rgb(241, 241, 241);
  padding-top: 20px;
  font-weight: 600;
  line-height: 1.4;
}
</style>


