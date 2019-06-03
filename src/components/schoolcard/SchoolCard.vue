<template>
  <sequential-entrance :delay="delay">
    <section class="school-card">
      <div class="school-icon-wrapper">
        <img class="school-icon" :src="icon" alt="alt">
      </div>
      <div class="school-info-wrapper">
        <h2 class="school-header">{{schoolInfo.name}}</h2>
        <p class="major">{{schoolInfo.major}}</p>
        <p>{{schoolInfo.minor}}</p>
        <p>{{schoolInfo.description}}</p>
      </div>
    </section>
  </sequential-entrance>
</template>

<script>
export default {
  name: "SchoolCard",
  props: ["icon", "schoolInfo", "delay"]
};
</script>

<style scoped>
.school-card {
  display: flex;
  width: 680px;
  height: auto;
  border-radius: 4px;
  margin: 20px;
  border: solid rgba(19, 22, 31, 0.9) 2.5px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
.school-icon {
  width: 150px;
}
.school-icon-wrapper {
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 25%;
  height: 100%;
}
.school-info-wrapper {
  background: rgba(19, 22, 31, 0.75);
  width: 75%;
  text-align: left;
  padding-left: 20px;
  height: 100%;
}

.school-header {
  margin-bottom: 0;
}

.major {
  margin-top: 0;
  margin-bottom: 30px;
}
</style>

