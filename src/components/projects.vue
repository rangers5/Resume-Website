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
          projectImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspin.atomicobject.com%2Fwp-content%2Fuploads%2FiStock_000029124968Medium-bwcrop.jpg&f=1&nofb=1",
        },
        {
          projectName: "CSGO stat tracker",
          projectDescription:
            "Website that displays your worst stats in CSGO (deaths, low K/D, low ADR, etc.) for the given username entered using the tracker.gg API",
          projectLink: "https://github.com/rangers5/CSGO-Website",
          projectImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K9lEPS_eeHQStPFNGQxBmgHaDt%26pid%3DApi&f=1",
        },
        {
          projectName: "OWL Match Predictor",
          projectDescription:
            "A simple Node.js project that attempts to predict the outcome of Overwatch League matches based on previous match data",
          projectLink: "https://github.com/rangers5/OWL-Match-Predictor",
          projectImage: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1624359%2Foverwatch-league.png&f=1&nofb=1",
        },    
      ],
    };
  },
};
</script>
<style></style>
