<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div>
    <h1>Register</h1>
    <h3>Enter Name:</h3>
    <h3>Enter email:</h3>
    <NuxtLink to="/auth/Login"><button>Register</button></NuxtLink>
  </div>
</template>
