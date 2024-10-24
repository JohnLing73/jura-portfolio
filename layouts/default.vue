<template>
  <div class="container mx-auto max-w-2xl">
    <!-- Layout 內容在此 -->
    <header class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">John Ling</NuxtLink>
      </div>
      <Menu />
    </header>
    <!-- Page 內容在 slot -->
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>    
</template>
<script setup>
useHead({
  // %s 代表 index.vue 中 useHead() 或 useSeoMeta() 設定的 title
  titleTemplate: '%s - Johh Ling',
  // 目前該 layout 應用到所有 page，因此在這裡載
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>
<style>
body {
  font-family: 'Roboto'
}
</style>