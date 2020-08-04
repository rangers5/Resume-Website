<template>
  <div>
     
    <b-jumbotron
      header="Projects"
      lead="A list of current projects that I have done"
    >
    <!-- A table for all the projects to go into -->
      <b-container class="bv-example-row" fluid>
        <b-row>
           <!-- For each project, add a column and a project card for each -->
          <b-col md="auto" v-for="proj in projectList" :key="proj.projectName">
            <Project
              :projectName="proj.projectName"
              :projectDescription="proj.projectDescription"
              :projectImage="proj.projectImage"
              :projectLink="proj.projectLink"
          /></b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
  </div>
</template>
<script>
// Import the project template
import Project from "./project.vue";
export default {
  name: "Projects",
  components: {
    Project,
  },
//   Add all completed projects to this array to automaticly add to the website
  data() {
    return {
      projectList: [
        {
          projectName: "This Website",
          projectDescription: "This website was built my me and the code is in the link below",
          projectLink: "https://github.com/rangers5",
          projectImage: "https://picsum.photos/600/300/?image=25",
        },
        {
          projectName: "CSGO stat tracker",
          projectDescription: "Basic website that displays your worst stats for CSGO",
          projectLink: "https://github.com/rangers5/CSGO-Website",
          projectImage: "https://picsum.photos/600/300/?image=25",
        },
        {
          projectName: "Will do later",
          projectDescription: "Will do another project later",
          projectLink: "https://github.com/rangers5",
          projectImage: "https://picsum.photos/600/300/?image=25",
        },
      ],
    };
  },
};
</script>
<style></style>
