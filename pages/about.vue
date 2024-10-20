<template>
  <div>
    About me
    <!-- <button @click="enableCustomLayout">Change Layout</button> -->
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'another'
})

// 動態切換 Layout (?之後可以換 dark mode?
// const enableCustomLayout = () => {
//   setPageLayout('another')
// }
</script>