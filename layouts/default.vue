<template>
  <div class="container mx-auto max-w-2xl">
    <!-- Layout 內容在此 -->
    <header class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">John Ling</NuxtLink>
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <!-- Page 內容在 slot -->
    <main class="p-2">
      <slot />
    </main>
  </div>    
</template>