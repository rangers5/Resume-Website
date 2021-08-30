<template>
  <div>
    <b-jumbotron container-fluid="true" bg-variant="dark" text-variant="white" border-variant="dark">
       <!-- Puts the element in a table so the photo can be on the right side of the text -->
      <b-container class="bv-example-row" fluid>
        <b-row>
          <b-col>
             <!-- Left side text block -->
            <h1 style="margin-bottom: 20px; font-weight: bold; font-size: 47px">About Me</h1>
            <h3 style="font-size: 25px">
              My name is Mark Juenemann, and I am a double major in Computer Science and
              Mathematics pursuing a degree at RCNJ.
            </h3>
            <hr />
            <p>
              {{aboutText}}
            </p>

            <b-button variant="primary" size="md" href="https://www.linkedin.com/in/mark-juenemann/" class="socialButton">Linkedin</b-button>  
            <b-button variant="success" size="md" href="https://github.com/rangers5" class="socialButton">Github</b-button>      
            </b-col>
            
          <b-col md="auto">
             <!-- Right side image block -->
            <b-img :src="photo" rounded  center height="300em" alt="Fluid image"></b-img
          ></b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: "About",
   async created(){
      let { data, error } = await this.$supabase
         .from('About_Section')
         .select('*')
         .range(0,1)
         if(error){
            console.error(error);
         }
         else
         {
         this.aboutText= data[0].textInfo;
         }
   },
  data() {
   //   Get the location of the photo
    return {
      aboutText: "I am a hardworking individual who has experience with multiple programming languages, including C++, C#, Java, Python, and Javascript with a focus on C++. I am also familiar with working in the Node.js environment, using libraries such as Vue and Express along with working with cloud service providers such as Azure and AWS. I am currently seeking an internship for the summer of 2022, along with any other opportunities you may have available.",
      photo: require("@/assets/photo.jpg"),
      
    };
  },
  components: {},
};
</script>
<style>
.socialButton
{
   margin-right: 15px;
   margin-bottom: 15px
}
</style>
