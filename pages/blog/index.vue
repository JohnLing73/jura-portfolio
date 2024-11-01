<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post._path"
    >
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup>
// const posts = await useAsyncData('blog-post', () => queryContent().find()) 
// console.log(posts)

const { data: posts } = await useAsyncData('blog-list', () => queryContent('blog').only(['title', '_path']).find())
</script>