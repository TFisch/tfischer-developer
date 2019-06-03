<template>
  <div class="dashboard">
    <h1 class="page-header">Education</h1>
    <div class="education-wrapper">
      <SchoolCard icon="static/assets/turing.png" :schoolInfo="turing" :delay="1000"/>
      <SchoolCard icon="static/assets/mizzou.png" :schoolInfo="mizzou" :delay="0"/>
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
        description:
          "I attended Mizzou as an undergraduate. Through studies of literature I gained a better understanding of originative prose and obtained an emphasis in creative writing. I also received a minor in History."
      },
      turing: {
        name: "Turing School of Software and Design",
        major: "Front End Engineering Program",
        description:
          "Turing is an eight month immersive dive into the world of web design. I learned UX/UI principles while establishing strong foundations in HTML, CSS, and JavaScript. Most importantly, with high pressure deadlines and daunting project demands, Turing taught me the essential skill of learning how to learn!"
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

