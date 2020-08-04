<template>
<div>
   <!-- The card element that each project will have -->
  <b-card
    :title="projectName"
    :img-src="projectImage"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text >
       <!-- Insert Project Description -->
       {{projectDescription}}
    </b-card-text>
      <!-- Github button and link -->
    <b-button :href="projectLink" variant="primary">Visit Github</b-button>
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