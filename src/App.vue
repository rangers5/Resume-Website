<template>
  <div>
    <topNavBar />
    <aboutSection id="about" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Resume />
    <hr style="background-color: black">
    <footer>
       <p class="text-center p3">Website made by Mark Juenemann</p>
    </footer>
  </div>
</template>

<script>
//Import the used elements for the webpage
import topNavBar from "./components/header.vue";
import aboutSection from "./components/about.vue";
import Projects from "./components/projects.vue";
import Contact from "./components/contact.vue";
import Resume from "./components/resume.vue";
export default {
  name: "App",
  components: {
    topNavBar,
    aboutSection,
    Projects,
    Contact,
    Resume,
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
