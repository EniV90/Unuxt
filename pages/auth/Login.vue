<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div>
    <h1>Login</h1>
    <h3>Enter Email</h3>
    <NuxtLink to="/"><button>Login</button></NuxtLink>
    <br />
    <NuxtLink to="/admin/Dashboard">Move to dashboard</NuxtLink>
  </div>
</template>
