<template>
  <div>
    Projects
  </div>
  <section v-if="pending">Pending</section>
  <section v-else-if="error">Pending</section>
  <section v-else>Here display the repos!</section>
</template>
<script setup>
// Executed on both server and client
// console.log(await $fetch('https://api.github.com/users/piotr-jura-udemy/repos'))

const { error , pending, data } = await useFetch('https://api.github.com/users/piotr-jura-udemy/repos')
</script>