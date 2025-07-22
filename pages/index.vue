<script setup>
const articles = ref([1, 2, 3, 4, 5]);
</script>

<template>
  <div>
    <div>
      <h1>List of Articles</h1>
    </div>
    <br />
    <div v-for="(index, article) in articles" :key="index">
      <h2>Articles - {{ article }}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fuga?
      </p>
    </div>
  </div>
</template>
