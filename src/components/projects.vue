<template>
  <div>
    <b-jumbotron
      header="Projects"
      lead="A list of projects that I have completed or actively working on"
    >
      <!-- For each project, add a card to the card group
       -->

      <b-card-group deck>
        <Project
          v-for="proj in projectList"
          :key="proj.projectName"
          :projectName="proj.projectName"
          :projectDescription="proj.projectDescription"
          :projectImage="proj.projectImage"
          :projectLink="proj.projectLink"
        />
      </b-card-group>
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
          projectDescription:
            "This website was built by me using Vue and Vue-Bootstrap as the frontend, check the source code in the link below.",
          projectLink: "https://github.com/rangers5/Resume-Website",
          projectImage:
            "https://jooinn.com/images/html-code-4.jpg",
        },
        {
          projectName: "OWL Match Predictor",
          projectDescription:
            "A simple Node.js project that attempts to predict the outcome of Overwatch League matches based on previous match data",
          projectLink: "https://github.com/rangers5/OWL-Match-Predictor",
          projectImage:
            "https://i0.wp.com/invisioncommunity.co.uk/wp-content/uploads/2017/07/OW_League_Logo_Lockup_light_bkg.png",
        },
        {
          projectName: "Data Analytics in Python Final Project",
          projectDescription:
            "The coding section of the multi-part final project for this course that examines the OWL data set.",
          projectLink: "https://github.com/rangers5/PythonFinal",
          projectImage:
            "https://www.ramapo.edu/social-media/files/2021/02/arch-zoom-background.png",
        },
      ],
    };
  },
};
</script>
<style></style>
