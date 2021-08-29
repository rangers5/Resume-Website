<template>
  <div id="contact">
    <h1 id="contact-header">Contact and Resume</h1>
    <ul class="list-unstyled">
      <b-media tag="li">
        <template v-slot:aside>
          <b-icon icon="mailbox" font-scale="3" />
        </template>
        <h5 class="mt-0 mb-1">Address</h5>
        <p class="mb-0">
          8 Spruce Lane, Parlin NJ, 08859
        </p>
      </b-media>

      <b-media tag="li" class="my-4">
        <template v-slot:aside>
          <b-icon icon="inboxes-fill" font-scale="3" />
        </template>

        <h5 class="mt-0 mb-1">E-mail</h5>
        <p class="mb-0">
          mjuenema@ramapo.edu
        </p>
      </b-media>

      <b-media tag="li">
        <template v-slot:aside>
          <b-icon icon="telephone-fill" font-scale="3" />
        </template>

        <h5 class="mt-0 mb-1">Phone</h5>
        <p class="mb-0">
          908-616-6772
        </p>
      </b-media>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Contact",
  components: {},
};
</script>
<style>
#contact {
  padding-left: 2%;
}
#contact-header {
  font-size: 60px;
}
</style>
