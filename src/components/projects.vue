<template>
  <div>
    <b-jumbotron
      header="Projects"
      lead="A list of projects that I have completed or that I am currently working on"
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
   async created(){
      let { data, error } = await this.$supabase
         .from('Projects')
         .select('*')
         if(error){
            console.error(error);
         }
         else
         {
         data.forEach((d) => this.$set(this.projectList, d.id - 1, d))
         }
   },
  data() {
    return {
       //This has default values that are somewhat up to date as I dont trust the free tier of supabase to keep this api running 24/7 (aka I dont trust me to log in weekly)
      projectList: [         
         {
            projectName: "Resume Website",
            projectDescription:
            "This website was built by me using Vue and Vue-Bootstrap as the frontend, with Supabase acting as the backend for getting project information.",
            projectLink: "https://github.com/rangers5/Resume-Website",
            projectImage:
            "https://www.markjuenemann.com/img/html.jpg",
         },
         {
            projectName: "Data Analytics in Python Final Project",
            projectDescription:
            "The coding section of the multi-part final project for this course that examines the OWL data set.",
            projectLink: "https://github.com/rangers5/PythonFinal",
            projectImage:
            "https://www.markjuenemann.com/img/ramapo.png",
         },
         {
            projectName: "VC5000 Assembler",
            projectDescription:
            "An assembler for the VC5000 that converts assembly into machine code to be used in an emulator. Privated at my professors request.",
            projectLink: "null",
            projectImage:
            "https://www.markjuenemann.com/img/asm.png",
         },
         {
            projectName: "VC5000 Emulator",
            projectDescription:
            "An emulator for the VC5000 decimal computer that allows machine code to be inserted into memory and successfully emulated. Privated at my professors request.",
            projectLink: "null",
            projectImage:
            "https://www.markjuenemann.com/img/asm.png",
         },
      ],
    };
  },
  
};

</script>
<style></style>

