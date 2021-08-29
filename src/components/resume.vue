<template>
  <div id="resume">
                 <b-media>
        <template v-slot:aside>
          <b-icon icon="card-list" font-scale="3" />
        </template>
        <h5 class="mt-0 mb-1">Resume</h5>
        <b-button v-b-toggle.collapse-1 variant="primary" size="sm">Show Resume</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <pdf src="resume.pdf" num-pages="1" />
        </b-collapse>
      </b-media>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: "Resume",
  components: {
     pdf
  },

};
</script>
<style>
#resume {
  padding-left: 2%;
  padding-right: 5%;
  padding-bottom: 2%;
}
#resume-header {
  font-size: 60px;
}
</style>
