<template>
  <div>
    <b-jumbotron container-fluid="true" bg-variant="info" text-variant="white" border-variant="dark">
       <!-- Puts the element in a table so the photo can be on the right side of the text -->
      <b-container class="bv-example-row" fluid>
        <b-row>
          <b-col>
             <!-- Left side text block -->
            <h1>About Me</h1>
            <h3>
              My name is Mark Juenemann, and I am a double major in computer science and
              mathematics pursuing a degree at RCNJ.
            </h3>
            <hr />
            <p>
              I have experience working with C++, C#, Java, Javascript, and HTML using Node.js, Vue, and Express. I am currently looking for an internship for the summer of 2021 along with any other opportunities you might have.
            </p>

            <b-button variant="primary" size="md" href="https://www.linkedin.com/in/mark-juenemann/">Linkedin</b-button>  
            <b-button variant="success" size="md" href="https://github.com/rangers5">Github</b-button>      
            </b-col>
            
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
