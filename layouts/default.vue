<template>
  <div>
    <!-- Layout 內容在此 -->
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- Page 內容在 slot -->
    <slot />
  </div>    
</template>