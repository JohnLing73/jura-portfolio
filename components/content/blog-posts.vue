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
const { data: posts } = await useAsyncData(
  'blog-list',
  () => queryContent('blog')
    .where({ _path: { $ne: '/blog' }})
    .only(['title', '_path'])
    .find()
)

console.log(posts.value);
</script>