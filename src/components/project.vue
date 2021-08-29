<template>
<div>
   <!-- The card element that each project will have -->
  <b-card
    :img-src="projectImage"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; height: 30rem;"
    class="mb-2"
  >
    <b-card-title style="height: 3rem;">{{projectName}}</b-card-title>
    <b-card-text style="height: 9rem;">
       <!-- Insert Project Description -->
       {{projectDescription}}
    </b-card-text>
      <!-- Github button and link -->
      <div v-if="projectLink=='null'">
         <b-button variant="danger" pressed="false">Private Soruce Code</b-button>
      </div>
      <div v-else>
         <b-button :href="projectLink" variant="primary">Visit Github</b-button>
      </div>
  </b-card>
</div>
</template>
<script>
export default {
  name: "Project",
  components: {
  },
//   Gets the data we need for each card
  props: {
     projectName: String,
     projectDescription: String,
     projectImage: String,
     projectLink: String
     
  }
};
</script>
<style>
</style>