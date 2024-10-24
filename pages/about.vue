<template>
  <div>
    About me
    <!-- <button @click="enableCustomLayout">Change Layout</button> -->
  </div>
</template>
<script setup>
// Both worked, 後寫會覆蓋
useSeoMeta({
  title: 'About'
})
useHead({
  title: 'About'
})
</script>