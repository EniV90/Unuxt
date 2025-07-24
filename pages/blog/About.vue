<script setup>
import AboutDetail from "../../components/AboutDetails.vue";
</script>

<template>
  <div>
    <H2>This is the About Page</H2>

    <AboutDetail :messages="'This is from the About Detail page'" />
  </div>
</template>
