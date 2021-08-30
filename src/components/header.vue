<template>
  <div>
    <b-navbar toggleable>
      <b-navbar-brand class="headerTitle">Mark's Website</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-brand
            active
            href="#about"
            id="navBarItem"
            class="headerItem"
            ><b-icon shift-v="5px" icon="chevron-right" font-scale=".5" />
            About</b-navbar-brand
          >
          <b-navbar-brand
            active
            href="#projects"
            id="navBarItem"
            class="headerItem"
            ><b-icon shift-v="5px" icon="chevron-right" font-scale=".5" />
            Projects</b-navbar-brand
          >
          <b-navbar-brand
            active
            href="#contact"
            id="navBarItem"
            class="headerItem"
            ><b-icon shift-v="5px" icon="chevron-right" font-scale=".5" />
            Contact</b-navbar-brand
          >
          <b-navbar-brand
            active
            href="#resume"
            id="navBarItem"
            class="headerItem"
            ><b-icon shift-v="5px" icon="chevron-right" font-scale=".5" />
            Resume</b-navbar-brand
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  components: {},
};
</script>
<style>
.headerItem {
  font-weight: lighter;
  font-size: 1rem;
  padding: 10px;
}
.headerTitle {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
