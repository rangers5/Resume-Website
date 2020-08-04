<template>
   <div>
      <topNavBar />
      <aboutSection id="about" />
      <Projects id="projects" />
   </div>
</template>

<script>
//Import the used elements for the webpage
import topNavBar from "./components/header.vue";
import aboutSection from "./components/about.vue";
import Projects from "./components/projects.vue";
export default {
  name: "App",
  components: {
    topNavBar,
    aboutSection,
    Projects,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
