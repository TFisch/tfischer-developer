<template>
  <div class="dashboard">
    <h1 class="page-header">Education</h1>
    <div class="education-wrapper">
      <SchoolCard icon="static/assets/turing.png" :schoolInfo="turing"/>
      <SchoolCard icon="static/assets/mizzou.png" :schoolInfo="mizzou"/>
    </div>
  </div>
</template>

<script>
import SchoolCard from "../../components/schoolcard/SchoolCard";

export default {
  name: "Education",
  components: {
    SchoolCard
  },
  data() {
    return {
      mizzou: {
        name: "University of Missouri - Columbia",
        major: "Bachleor of Arts and Sciences - English",
        minor: "History Minor",
        description: "I attending Mizzou "
      },
      turing: {
        name: "Turing School of Software and Design",
        major: "Front End Engineering Program",
        description: "sdfjkklj"
      }
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
.education-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 8%;
}
</style>

