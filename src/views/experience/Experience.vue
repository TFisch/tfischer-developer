<template>
  <div class="dashboard">
    <h1>Experience</h1>

    <h2 class="exp-subhead">Languages</h2>
    <p class="exp-copy">{{languages.copy}}</p>
    <img class="js-logo" src="static/assets/js-logo.png">
    <img class="html-logo" src="static/assets/html5-logo.png">
    <img src="static/assets/css3-logo.png">
    <img class="ts-logo" src="static/assets/typescript-logo.png">

    <h2 class="exp-subhead">Frameworks</h2>
    <p class="exp-copy">{{frameworks.copy}}</p>
    <img src="static/assets/react-icon.png">
    <img src="static/assets/vue-logo.png">
    <img src="static/assets/angular-icon.png">

    <h2 class="exp-subhead">Tools</h2>
    <p class="exp-copy">{{tools.copy}}</p>
    <img src="https://via.placeholder.com/150">
    <img src="https://via.placeholder.com/150">
    <img src="https://via.placeholder.com/150">
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      languages: {
        copy: "These are the technologies I work with the most."
      },
      frameworks: {
        copy:
          "Its essential to understand the intracacies of JavaScript, but frameworks (and libraries) tend to make life a little easier and neatier. "
      },
      tools: {
        copy:
          "From spinning up a quick back end to packaging up an application, these are the tools that help my work come full circle."
      },
      cms: {
        copy:
          "Usually I prefer starting a project from scratch, but there are some undeniable advantages of using a content managament system."
      }
    };
  }
};
</script>

<style scoped>
.dashboard {
  height: 100vh;
  width: 100%;
  padding-left: 8vw;
}
.exp-copy {
  color: #fff;
  max-width: 600px;
  font-size: 1.35rem;
  line-height: 1.5;
  text-align: center;
  margin: auto;
}
.exp-subhead {
  font-size: 2.5rem;
  color: #fff;
}
.icon-wrapper {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
.html-logo {
  width: 190px;
  padding-bottom: 28px;
  padding-left: 20px;
}
.js-logo {
  width: 193px;
  padding-bottom: 24px;
}
.ts-logo {
  width: 200px;
  padding-bottom: 22px;
}
</style>