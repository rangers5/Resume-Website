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
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspin.atomicobject.com%2Fwp-content%2Fuploads%2FiStock_000029124968Medium-bwcrop.jpg&f=1&nofb=1",
        },
        {
          projectName: "OWL Match Predictor",
          projectDescription:
            "A simple Node.js project that attempts to predict the outcome of Overwatch League matches based on previous match data",
          projectLink: "https://github.com/rangers5/OWL-Match-Predictor",
          projectImage:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1624359%2Foverwatch-league.png&f=1&nofb=1",
        },
        {
          projectName: "Data Analytics in Python Final Project",
          projectDescription:
            "The coding section of the multi-part final project for this course that examines the OWL data set.",
          projectLink: "https://github.com/rangers5/PythonFinal",
          projectImage:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2FgdeNPT3VPXourlhOgy%2F200_s.gif%3Fcid%3D790b761199ugdi8gn0p6x68lehr729qmqvfadf8als9j5ebs%26rid%3D200_s.gif&f=1&nofb=1",
        },
      ],
    };
  },
};
</script>
<style></style>
