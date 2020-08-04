<template>
  <div>
    <b-jumbotron container-fluid="true">
       <!-- Puts the element in a table so the photo can be on the right side of the text -->
      <b-container class="bv-example-row" fluid>
        <b-row>
          <b-col>
             <!-- Left side text block -->
            <h1>About Me</h1>
            <h3>
              Mark Juenemann is a double major in computer science and
              mathematics pursuing a degree at Ramapo College of New Jersey.
            </h3>
            <hr />
            <p>
              He is currently looking for an internship for the summer of 2021.
            </p>

            <b-button variant="primary" href="https://www.linkedin.com/in/mark-juenemann/">Linkedin</b-button>
            <br />
            <b-button variant="success" href="https://github.com/rangers5">Github</b-button></b-col>
          <b-col md="auto">
             <!-- Right side image block -->
            <b-img :src="photo" rounded height="300em" alt="Fluid image"></b-img
          ></b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
   //   Get the location of the photo
    return {
      photo: require("@/assets/photo.jpg"),
    };
  },
  components: {},
};
</script>
<style></style>
