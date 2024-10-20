<template>
  <div>
    Inside Blog
  </div>
  <div>
    Post Id (from $route) is {{ $route.params.id }}
  </div>
  <div>
    Post Id (from useRoute) is {{ route.params.id }}
  </div>
</template>
<script setup>
const route = useRoute()
</script>