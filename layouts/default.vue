<template>
  <div class="container mx-auto max-w-4xl">
    <!-- Layout 內容在此 -->
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-center space-x-12">
        <div>
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800">John Ling</NuxtLink>
        </div>
        <Menu />
      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
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
  font-family: 'Roboto';
  /* set dark mode by tailwind */
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>