<template>
  <div>
    <BlogPosts
      v-slot="{ posts }"
      :limit="limit"
    >
      <div
        v-for="post in posts"
        :key="post.id"
      >
        <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
      </div>
    </BlogPosts>
  </div>
</template>
<script setup>
defineProps({
  limit: {
    type: Number
  }
})
</script>